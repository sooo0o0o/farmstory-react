package kr.co.tkdenddl1324.farmstoryapi.service;

import kr.co.tkdenddl1324.farmstoryapi.dto.TermsDTO;
import kr.co.tkdenddl1324.farmstoryapi.dto.UserDTO;
import kr.co.tkdenddl1324.farmstoryapi.entity.Terms;
import kr.co.tkdenddl1324.farmstoryapi.entity.User;
import kr.co.tkdenddl1324.farmstoryapi.repository.TermsRepository;
import kr.co.tkdenddl1324.farmstoryapi.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final TermsRepository termsRepository;
    private final ModelMapper modelMapper;

    @Override
    public String register(UserDTO userDTO) {
        String encoded = passwordEncoder.encode(userDTO.getPass());
        userDTO.setPass(encoded);

        User user = modelMapper.map(userDTO, User.class);
        User savedUser = userRepository.save(user);

        return savedUser.getUid();
    }

    @Override
    public TermsDTO terms() {

        Optional<Terms> optTerms = termsRepository.findById(1);

        if (optTerms.isPresent()) {
            Terms terms = optTerms.get();
            TermsDTO termsDTO = modelMapper.map(terms, TermsDTO.class);
            return termsDTO;
        }

        return null;
    }
}
