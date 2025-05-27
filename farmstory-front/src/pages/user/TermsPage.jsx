import React from "react";
import { Terms } from "../../components/user/Terms";
import { MainLayout } from "../../layouts/MainLayout";

export const TermsPage = () => {
  return (
    <MainLayout>
      <div id="user">
        <Terms />
      </div>
    </MainLayout>
  );
};
