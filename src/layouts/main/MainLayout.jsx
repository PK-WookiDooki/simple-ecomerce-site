import React from "react";
import { Footer, NB } from "../../components";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-primary text-background min-h-screen flex flex-col">
      <NB />
      <main className="w-full mx-auto flex flex-1 justify-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
