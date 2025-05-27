package kr.co.tkdenddl1324.farmstoryapi.service;

import kr.co.tkdenddl1324.farmstoryapi.dto.TermsDTO;
import kr.co.tkdenddl1324.farmstoryapi.dto.UserDTO;

public interface UserService {


    public String register(UserDTO userDTO);

    public TermsDTO terms();
}
