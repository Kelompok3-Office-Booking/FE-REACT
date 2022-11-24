import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { twitter } from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const NavbarAdmin = () => {
  const [toggle, setToggle] = useState(false);

  const HANDLETOGGLE = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    setToggle(false);
  }, [])
  return (
    <div className="bg-bgPrimary text-white flex justify-center">
      <div className="container">
        <nav className="flex justify-between my-4">
          <Link className="my-auto">Dashboard / ini nanti link</Link>
          <div className="flex flex-col">
            <button
              id="dropdownDividerButton"
              onClick={HANDLETOGGLE}
              data-dropdown-toggle="dropdownDivider"
              className="flex content-center bg-sky-800 rounded-full px-4 py-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium">
              <img
                src={twitter}
                onClick={HANDLETOGGLE}
                alt=""
                className="w-12 border-4 rounded-full border-sky-700 my-auto" />
              <p className="my-auto px-4 font-bold">Admin Slot</p>
              <FontAwesomeIcon className="my-auto pr-4" onClick={HANDLETOGGLE} icon={faCaretDown} />
            </button>
            <div id="dropdownDivider" className={`${toggle ? "visible absolute" : "hidden"}`}>
              <div class="my-auto text-slate-900 py-2">
                <Link href="#" className="inline-block relative -right-6 top-20 z-10 w-44 h-auto bg-white rounded-2xl divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 py-2 px-4 text-lg my-auto text-gray-700 hover:bg-red-700  hover:text-white dark:hover:bg-red-700 dark:text-gray-200 dark:hover:text-white font-bold">
                  <FontAwesomeIcon className="my-auto pr-4" icon={faRightFromBracket} />Logout
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarAdmin;
