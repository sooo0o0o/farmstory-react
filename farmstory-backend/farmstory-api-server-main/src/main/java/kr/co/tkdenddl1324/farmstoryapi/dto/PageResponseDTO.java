package kr.co.tkdenddl1324.farmstoryapi.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PageResponseDTO<T> {

    private List<T> dtoList;
    private String cate;
    private String type;
    private String keyword;

    private int pg;
    private int size;
    private int total;
    private int startNo;
    private int start, end;
    private boolean prev, next;

    @Builder
    public PageResponseDTO(PageRequestDTO pageRequestDTO, List<T> dtoList, int total){
        this.cate = pageRequestDTO.getCate();
        this.type = pageRequestDTO.getType();
        this.keyword = pageRequestDTO.getKeyword();
        this.pg = pageRequestDTO.getPg();
        this.size = pageRequestDTO.getSize();
        this.total = total;
        this.dtoList = dtoList;

        this.startNo = total - ((pg - 1) * size);
        this.end = (int) (Math.ceil(this.pg / 10.0)) * 10;
        this.start = this.end - 9;

        int last = (int) (Math.ceil(total / (double) size));
        this.end = end > last ? last : end;
        this.prev = this.start > 1;
        this.next = total > this.end * this.size;
    }


}
