import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavbarAdmin from "./navbar";
import SidebarAdmin from "./sidebar";

const LayoutAdmin = () => {
  const [toggle, setToggle] = useState(true);

  const HANDLETOGGLE = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <div className="bg-slate-50">
      <div className="flex">
        <aside className="fixed z-40">
          <SidebarAdmin toggle={toggle} HANDLETOGGLE={HANDLETOGGLE} />
        </aside>
        <main>
          <div
            className={`${toggle ? "pl-80 duration-500" : "pl-48"
              } fixed w-full z-20`}>
            <NavbarAdmin />
          </div>
          <div className="flex content-center w-screen justify-center">
            <div
              className={`${toggle ? "pl-80 duration-500" : "pl-48"
                } w-full pt-20 flex justify-center`}>
              <div className="p-12 bg-slate-50 mb-4 container h-screen text-black w-full">
                {<Outlet />}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutAdmin;
