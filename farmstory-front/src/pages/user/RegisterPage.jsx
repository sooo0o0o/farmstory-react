import React from "react";
import { Register } from "../../components/user/Register";
import { MainLayout } from "../../layouts/MainLayout";

export const RegisterPage = () => {
  return (
    <MainLayout>
      <div id="user">
        <Register />
      </div>
    </MainLayout>
  );
};
