import { BetterSpace } from "assets";
import React, { useState } from "react";
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
          <div className="p-12">{"ini adalah content"}</div>
        </main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
