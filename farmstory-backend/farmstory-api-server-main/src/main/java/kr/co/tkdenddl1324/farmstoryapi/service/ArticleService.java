package kr.co.tkdenddl1324.farmstoryapi.service;

import kr.co.tkdenddl1324.farmstoryapi.dto.ArticleDTO;
import kr.co.tkdenddl1324.farmstoryapi.dto.PageRequestDTO;
import kr.co.tkdenddl1324.farmstoryapi.dto.PageResponseDTO;

import java.util.List;

public interface ArticleService {

    public int register(ArticleDTO articleDTO);

    public PageResponseDTO<ArticleDTO> list(PageRequestDTO pageRequestDTO);
    public ArticleDTO get(int no);
    public void modify(ArticleDTO articleDTO);
    public void remove(int no);

}
