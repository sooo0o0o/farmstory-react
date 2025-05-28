import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../slices/loginSlice";
import { getUserLogout } from "../../api/userAPI";

export const Header = () => {
  const navigate = useNavigate();

  //리덕스 dispatch (리덕스 스토어 함수 호출을 위함)
  const dispatch = useDispatch();

  //리덕스 스토어
  const loginSlice = useSelector((state) => state.loginSlice);

  //로그아웃
  const logoutHandler = () => {
    //로그아웃 서버 요청
    const fetchData = async () => {
      try {
        const data = await getUserLogout();
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    //호출
    fetchData();

    //로그아웃 처리
    dispatch(logout());

    //로그아웃 후 이동
    navigate("/user/login");
  };

  return (
    <>
      <header>
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="로고" />
        </Link>
        <p>
          <Link to="/">HOME |</Link>

          {!loginSlice.username ? (
            <>
              <Link to="/user/login">로그인 |</Link>
              <Link to="/user/terms">회원가입 |</Link>
            </>
          ) : (
            <>
              <Link to="./myinfo/cart.html">나의정보 |</Link>
              <Link onClick={logoutHandler}>로그아웃 |</Link>
              <Link to="./admin/">관리자 |</Link>
            </>
          )}

          <Link to="./community/qna.html">고객센터</Link>
        </p>
        <img src="/images/head_txt_img.png" alt="3만원 이상 무료배송" />

        <ul className="gnb">
          <li>
            <Link to="/introduction/hello">팜스토리소개</Link>
          </li>
          <li>
            <Link to="/market/list">
              <img src="/images/head_menu_badge.png" alt="30%" />
              장보기
            </Link>
          </li>
          <li>
            <Link to="/board/list?cate1=croptalk&cate2=story">
              농작물이야기
            </Link>
          </li>
          <li>
            <Link to="/board/list?cate1=event&cate2=info">이벤트</Link>
          </li>
          <li>
            <Link to="/board/list?cate1=community&cate2=notice">커뮤니티</Link>
          </li>
        </ul>
      </header>
    </>
  );
};
