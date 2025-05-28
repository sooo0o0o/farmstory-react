import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postUserLogin } from "../../api/userAPI";
import { useDispatch } from "react-redux";
import { login } from "../../slices/loginSlice";

const initState = {
  uid: "",
  pass: "",
};

export const Login = () => {
  const [user, setUser] = useState({ ...initState });

  const navigate = useNavigate();

  //리덕스 스토어 dispatch
  const dispatch = useDispatch();

  //핸들러
  const changeHandler = (e) => {
    e.preventDefault();

    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    //서버 요청
    //서버 전송 -> 백엔드의 postmapping 을 호출 (postUser)
    const fetchData = async () => {
      try {
        //로그인
        const data = await postUserLogin(user);

        console.log(data);

        //로그인 성공시
        if (data.username) {
          dispatch(login(data));

          //메인 이동
          navigate("/");
        }
      } catch (err) {
        console.error(err);
      }
    };

    //호출
    fetchData();
  };

  return (
    <section className="login">
      <form onSubmit={submitHandler}>
        <table border="0">
          <tbody>
            <tr>
              <td>
                <img src="/images/login_ico_id.png" alt="아이디" />
              </td>
              <td>
                <input
                  type="text"
                  name="uid"
                  value={user.uid}
                  onChange={changeHandler}
                  placeholder="아이디 입력"
                />
              </td>
            </tr>
            <tr>
              <td>
                <img src="/images/login_ico_pw.png" alt="비밀번호" />
              </td>
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
          </tbody>
        </table>
        <input type="submit" value="로그인" className="btnLogin" />
      </form>
      <div>
        <h3>회원 로그인 안내</h3>
        <p>아직 회원이 아니시면 회원으로 가입하세요.</p>
        <div style={{ textAlign: "right" }}>
          <Link to="/find/userid">아이디 |</Link>
          <Link to="/find/password">비밀번호찾기 |</Link>
          <Link to="/user/terms">회원가입</Link>
        </div>
      </div>
    </section>
  );
};
