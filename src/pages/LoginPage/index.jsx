import { BetterSpace } from "assets";
import { Button } from "components";
import React from "react";
const LoginPage = () => {
  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <a
            href="#"
            className="flex items-center justify-center mb-6 text-2xl font-bold text-gray-900 pt-10 xl:pt-20"
          >
            <img className="w-8 h-8 mr-2" src={BetterSpace} alt="logo" />
            BETTER SPACE
          </a>
          <div className="p-6 space-y-2 md:space-y-4 sm:p-8">
            <div className="flex flex-col items-start">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2x">
                welcome Admin,
              </h1>
              <p className="text-base text-neutral-600">
                Lets login to manage the app
              </p>
            </div>
            <form onSubmit={() => {}} className="space-y-4 pt-4">
              <div>
                <div className="relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_outlined"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Username
                  </label>
                </div>
              </div>
              <div>
                <div class="relative">
                  <input
                    type="text"
                    id="floating_outlined"
                    class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_outlined"
                    class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Password
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <p className="font-normal text-neutral-500">
                  Forgot your password?
                  <a
                    href="#"
                    className="text-sm font-semibold text-secondary hover:underline"
                  >
                    Forgot password
                  </a>
                </p>
              </div>
              <Button props={"Login"} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;