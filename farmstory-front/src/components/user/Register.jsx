import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postUser } from "../../api/userAPI";

const initState = {
  uid: "",
  pass: "",
  name: "",
  nick: "",
  email: "",
  hp: "",
  zip: "",
  addr1: "",
  addr2: "",
};

export const Register = () => {
  const [user, setUser] = useState({ ...initState });
  const navigate = useNavigate();

  //핸들러
  const changeHandler = (e) => {
    e.preventDefault();

    //setter로 state 초기화
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user);

    //서버 전송 -> 백엔드의 postmapping 을 호출 (postUser)
    const fetchData = async () => {
      try {
        const data = await postUser(user);

        alert("회원가입 완료!");

        //회원가입 완료 후 로그인으로 컴포넌트 전환
        navigate("/user/login");
      } catch (err) {
        console.error(err);
      }
    };

    //호출
    fetchData();
  };

  return (
    <section className="register">
      <form onSubmit={submitHandler}>
        <h2 className="tit">사이트 이용정보 입력</h2>
        <table border="1">
          <tbody>
            <tr>
              <td>아이디</td>
              <td>
                <input
                  type="text"
                  name="uid"
                  value={user.uid}
                  onChange={changeHandler}
                  placeholder="아이디 입력"
                />
                <button type="button">
                  <img src="/images/chk_id.gif" alt="중복확인" />
                </button>
                <span className="uidResult"></span>
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <input
                  type="password"
                  name="pass"
                  value={user.pass}
                  onChange={changeHandler}
                  placeholder="비밀번호 입력"
                />
              </td>
            </tr>
            <tr>
              <td>비밀번호 확인</td>
              <td>
                <input
                  type="password"
                  name="pass2"
                  placeholder="비밀번호 입력 확인"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <h2 className="tit">개인정보 입력</h2>
        <table border="1">
          <tbody>
            <tr>
              <td>이름</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={changeHandler}
                  placeholder="이름 입력"
                />
              </td>
            </tr>
            <tr>
              <td>별명</td>
              <td>
                <p className="nickInfo">공백없는 한글, 영문, 숫자 입력</p>
                <input
                  type="text"
                  name="nick"
                  value={user.nick}
                  onChange={changeHandler}
                  placeholder="별명 입력"
                />
                <button type="button">
                  <img src="/images/chk_id.gif" alt="중복확인" />
                </button>
                <span className="nickResult"></span>
              </td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={changeHandler}
                  placeholder="이메일 입력"
                />
                <button type="button">
                  <img src="/images/chk_auth.gif" alt="인증번호 받기" />
                </button>
                <div className="auth">
                  <input type="text" name="auth" placeholder="인증번호 입력" />
                  <button type="button">
                    <img src="/images/chk_confirm.gif" alt="확인" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>휴대폰</td>
              <td>
                <input
                  type="text"
                  name="hp"
                  value={user.hp}
                  onChange={changeHandler}
                  placeholder="휴대폰 입력"
                />
              </td>
            </tr>
            <tr>
              <td>주소</td>
              <td>
                <input
                  type="text"
                  name="zip"
                  value={user.zip}
                  onChange={changeHandler}
                  placeholder="우편번호"
                />
                <button type="button">
                  <img src="/images/chk_post.gif" alt="우편번호찾기" />
                </button>
                <input
                  type="text"
                  name="addr1"
                  value={user.addr1}
                  onChange={changeHandler}
                  placeholder="주소 검색"
                />
                <input
                  type="text"
                  name="addr2"
                  value={user.addr2}
                  onChange={changeHandler}
                  placeholder="상세주소 입력"
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <Link to="/user/login" className="btn btnCancel">
            취소
          </Link>
          <input type="submit" value="회원가입" className="btn btnRegister" />
        </div>
      </form>
    </section>
  );
};
