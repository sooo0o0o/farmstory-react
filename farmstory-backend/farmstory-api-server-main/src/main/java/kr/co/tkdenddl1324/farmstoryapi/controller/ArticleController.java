package kr.co.tkdenddl1324.farmstoryapi.controller;

import jakarta.servlet.http.HttpServletRequest;
import kr.co.tkdenddl1324.farmstoryapi.dto.ArticleDTO;
import kr.co.tkdenddl1324.farmstoryapi.dto.PageRequestDTO;
import kr.co.tkdenddl1324.farmstoryapi.dto.PageResponseDTO;
import kr.co.tkdenddl1324.farmstoryapi.service.ArticleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Log4j2
@RequiredArgsConstructor
@RestController
public class ArticleController {

    private final ArticleService articleService;


    @GetMapping("/article")
    public PageResponseDTO<ArticleDTO> list(PageRequestDTO pageRequestDTO){

        log.info("pageRequestDTO : " + pageRequestDTO);

        PageResponseDTO<ArticleDTO> pageResponseDTO = articleService.list(pageRequestDTO);
        log.info("pageResponseDTO : " + pageResponseDTO);

        return pageResponseDTO;
    }

    @GetMapping("/article/{no}")
    public ArticleDTO view(String cate, @PathVariable(name = "no") int no){
        return articleService.get(no);
    }


    @PostMapping("/article")
    public Map<String, Integer> write(HttpServletRequest req, @RequestBody ArticleDTO articleDTO){

        articleDTO.setRegip(req.getRemoteAddr());
        log.info(articleDTO.toString());

        int no = articleService.register(articleDTO);

        return Map.of("no", no);
    }

}
