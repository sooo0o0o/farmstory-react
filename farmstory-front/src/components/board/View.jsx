import React from "react";

const View = () => {
  return (
    <div id="board">
      {/* 게시판 글목록/글쓰기/글보기/글수정 내용 시작 */}
      <section className="view">
        <h1>글보기</h1>
        <table border="0">
          <tr>
            <th>제목</th>
            <td>
              <input type="text" name="title" value="제목입니다." readonly />
            </td>
          </tr>
          <tr>
            <th>파일</th>
            <td>
              <p>
                <a href="#">2021년 상반기 매출현황.xls</a>&nbsp;<span>7</span>회
                다운로드
              </p>
              <p>
                <a href="#">교육 운영 관리자료.hwp</a>&nbsp;<span>7</span>회
                다운로드
              </p>
            </td>
          </tr>
          <tr>
            <th>내용</th>
            <td>
              <textarea name="content" readonly>
                내용 샘플입니다.
              </textarea>
            </td>
          </tr>
        </table>

        <div>
          <a href="#" className="btn btnRemove">
            삭제
          </a>
          <a href="./modify.html" className="btn btnModify">
            수정
          </a>
          <a href="./list.html" className="btn btnList">
            목록
          </a>
        </div>

        {/* 댓글목록 */}
        <section className="commentList">
          <h3>댓글목록</h3>

          <article>
            <span className="date">2024-05-20</span>
            <span className="nick">길동이</span>
            <p className="content">댓글 샘플 입니다.</p>
            <div>
              <a href="#" className="remove">
                삭제
              </a>
              <a href="#" className="modify">
                수정
              </a>
            </div>
          </article>

          <p className="empty">등록된 댓글이 없습니다.</p>
        </section>

        {/* 댓글쓰기 */}
        <section className="commentForm">
          <h3>댓글쓰기</h3>
          <form action="#">
            <textarea name="content">댓글내용 입력</textarea>
            <div>
              <a href="#" classNameName="btn btnCancel">
                취소
              </a>
              <input
                type="submit"
                value="작성완료"
                classNameName="btn btnComplete"
              />
            </div>
          </form>
        </section>
        {/* 내용 끝 */}
      </section>
    </div>
  );
};

export default View;
