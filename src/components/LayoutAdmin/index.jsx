import React from "react";
import { Outlet } from "react-router-dom";
import NavbarAdmin from "./navbar";
import SidebarAdmin from "./sidebar";

const LayoutAdmin = () => {
  return (
    <div className="bg-slate-50">
      <div className="flex">
        <aside className="relative">
          <SidebarAdmin />
        </aside>
        <main className="w-full flex flex-col">
          <NavbarAdmin />
          <div className="p-12 bg-slate-50 container text-black">
            <div>
              {<Outlet />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
