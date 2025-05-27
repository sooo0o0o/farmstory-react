import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <Link to="/admin/" className="logo">
          <img src="/images/admin_logo.jpg" alt="로고" />
        </Link>
        <p>
          <Link to="/">HOME |</Link>
          <Link to="#">로그아웃 |</Link>
          <Link to="#">고객센터</Link>
        </p>
      </header>
    </>
  );
};
