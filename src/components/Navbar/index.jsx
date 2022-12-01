import { BetterSpace } from "assets";
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const HANDLETOGGLE = () => {
    setToggle(!toggle);
  };

  // let active =
  //   "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white";
  // let notActive =
  //   "block py-2 pl-3 pr-4 text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0";

  return (
    <>
      <nav className="bg-bgPrimary px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <HashLink smooth to={`/login`} className="flex items-center">
            <img
              src={BetterSpace}
              className="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl text-white font-bold whitespace-nowrap">
              BETTER SPACE
            </span>
          </HashLink>
          <button
            onClick={HANDLETOGGLE}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-200 rounded-lg md:hidden hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`${
              toggle ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">
              <li className="flex justify-center items-center">
                <HashLink
                  onClick={HANDLETOGGLE}
                  smooth
                  to="/#"
                  className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0"
                >
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  onClick={HANDLETOGGLE}
                  smooth
                  to="#features"
                  className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0"
                >
                  Features
                </HashLink>
              </li>
              <li>
                <HashLink
                  onClick={HANDLETOGGLE}
                  smooth
                  to="/#testimonials"
                  className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0"
                >
                  Testimonials
                </HashLink>
              </li>
              <li>
                <HashLink
                  onClick={HANDLETOGGLE}
                  smooth
                  to="/#tips"
                  className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0"
                >
                  Step
                </HashLink>
              </li>
              <li>
                <HashLink
                  onClick={HANDLETOGGLE}
                  smooth
                  to="/#contact"
                  className="block py-2 pl-3 pr-4 text-white md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0"
                >
                  About us
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#hero">
                  <button
                    type="button"
                    className="text-white bg-secondary hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                  >
                    Get Now
                  </button>
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
