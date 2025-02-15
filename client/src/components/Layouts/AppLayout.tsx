import React from "react";
import { Outlet } from "react-router-dom";

interface AppLayoutProps {
  backButton?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default AppLayout;
