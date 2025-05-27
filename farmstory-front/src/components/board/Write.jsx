import React from "react";

const Write = () => {
  return (
    <div id="board">
      <section class="write">
        <h1>글쓰기</h1>
        <form action="#">
          <table border="0">
            <tr>
              <th>제목</th>
              <td>
                <input
                  type="text"
                  name="title"
                  placeholder="제목을 입력하세요."
                />
              </td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                <textarea name="content"></textarea>
              </td>
            </tr>
            <tr>
              <th>파일</th>
              <td>
                <p>최대 2개 파일 첨부 가능, 각 파일당 최대 10MB까지 가능</p>
                <input type="file" name="file1" />
                <input type="file" name="file2" />
              </td>
            </tr>
          </table>

          <div>
            <a href="./list.html" class="btn btnCancel">
              취소
            </a>
            <input type="submit" value="작성완료" class="btn btnComplete" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Write;
