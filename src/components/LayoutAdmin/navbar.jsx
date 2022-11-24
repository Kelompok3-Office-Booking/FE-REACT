import React from "react";
import { Link } from "react-router-dom";
import { twitter } from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const NavbarAdmin = () => {
  return (
    <div className="bg-slate-900 text-white flex justify-center">
      <div className="container">
        <nav className="flex justify-between my-4">
          <Link className="my-auto">Dashboard / ini nanti link</Link>
          <button
            id="dropdownDividerButton"
            data-dropdown-toggle="dropdownDivider"
            className="flex content-center bg-sky-800 rounded-full px-4 py-2"
          >
            <img
              src={twitter}
              alt=""
              className="w-12 border-4 rounded-full border-sky-700 my-auto"
            />
            <p className="my-auto px-4 font-bold">Admin Slot</p>
            <FontAwesomeIcon className="my-auto pr-4" icon={faCaretDown} />
          </button>
          <div
            id="dropdownDivider"
            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <div class="py-1">
              <Link
                href="#"
                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Separated link
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarAdmin;
