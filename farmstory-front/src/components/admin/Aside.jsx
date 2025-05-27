import React from "react";
import { Link } from "react-router-dom";

export const Aside = () => {
  return (
    <>
      <aside>
        <h3>주요기능</h3>
        <ul class="lnb">
          <li>
            <span>상품관리</span>
            <ol>
              <li>
                <Link to="/admin/product/list">상품목록</Link>
              </li>
              <li>
                <Link to="/admin/product/register">상품등록</Link>
              </li>
            </ol>
          </li>
          <li>
            <span>주문관리</span>
            <ol>
              <li>
                <Link to="./order/list.html">주문목록</Link>
              </li>
            </ol>
          </li>
          <li>
            <span>회원관리</span>
            <ol>
              <li>
                <Link to="./user/list.html">회원목록</Link>
              </li>
            </ol>
          </li>
        </ul>
      </aside>
    </>
  );
};
