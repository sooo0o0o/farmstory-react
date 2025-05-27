import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <section className="login">
      <form action="#">
        <table border="0">
          <tr>
            <td>
              <img src="/images/login_ico_id.png" alt="아이디" />
            </td>
            <td>
              <input type="text" name="uid" placeholder="아이디 입력" />
            </td>
          </tr>
          <tr>
            <td>
              <img src="/images/login_ico_pw.png" alt="비밀번호" />
            </td>
            <td>
              <input type="password" name="pass" placeholder="비밀번호 입력" />
            </td>
          </tr>
        </table>
        <input type="submit" value="로그인" class="btnLogin" />
      </form>
      <div>
        <h3>회원 로그인 안내</h3>
        <p>아직 회원이 아니시면 회원으로 가입하세요.</p>
        <div style={{ "text-align": "right" }}>
          <Link to="/find/userid">아이디 |</Link>
          <Link to="/find/password">비밀번호찾기 |</Link>
          <Link to="/user/terms">회원가입</Link>
        </div>
      </div>
    </section>
  );
};
