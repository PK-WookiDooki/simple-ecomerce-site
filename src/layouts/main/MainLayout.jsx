import React from "react";
import { NB } from "../../components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-primary text-background min-h-screen">
      <NB />
      <main className="w-[90%] mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
