import { useState } from "react";

import "./styles/App.scss";
import "./styles/Admin.scss";
import { MainLayout } from "./layouts/MainLayout";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
{
  /* 
  pages = 라우팅 시키기 위한 페이지 목록
  pages 의 컴포넌트(파일) 안에서는 로직을 작성하지 않는다 
*/
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
