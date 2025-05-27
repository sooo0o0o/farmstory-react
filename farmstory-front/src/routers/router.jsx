import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/main/MainPage";
import { HelloPage } from "../pages/introduction/HelloPage";
import { DirectionPage } from "../pages/introduction/DirectionPage";
import { ListPage } from "../pages/market/ListPage";
import { LoginPage } from "../pages/user/LoginPage";
import { TermsPage } from "../pages/user/TermsPage";
import { RegisterPage } from "../pages/user/RegisterPage";
import { AdminMainPage } from "../pages/admin/AdminMainPage";
import { lazy } from "react";

// prettier-ignore
const AdminProductRegisterPage = lazy(() => import("../pages/admin/product/AdminRegisterPage"));
const BoardListPage = lazy(() => import("../pages/board/ListPage"));
const BoardViewPage = lazy(() => import("../pages/board/ViewPage"));
const BoardWritePage = lazy(() => import("../pages/board/WritePage"));
const BoardModifyPage = lazy(() => import("../pages/board/ModifyPage"));

//라우터 생성
const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/introduction/hello", element: <HelloPage /> },
  { path: "/introduction/direction", element: <DirectionPage /> },
  { path: "/market/list", element: <ListPage /> },
  { path: "/user/login", element: <LoginPage /> },
  { path: "/user/terms", element: <TermsPage /> },
  { path: "/user/register", element: <RegisterPage /> },
  { path: "/user/logout", element: null },
  { path: "/board/list", element: <BoardListPage /> },
  { path: "/board/write", element: <BoardWritePage /> },
  { path: "/board/view", element: <BoardViewPage /> },
  { path: "/board/modify", element: <BoardModifyPage /> },
  { path: "/admin", element: <AdminMainPage /> },
  { path: "/admin/product/register", element: <AdminProductRegisterPage /> },
]);

// 라우터 내보내기
export default router;
