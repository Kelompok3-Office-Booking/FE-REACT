import APIAuth from "apis/restApis/Auth";
import { BetterSpace, login } from "assets";
import { Button } from "components";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginPage = () => {

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    await APIAuth.signin({ email, password })
      .then((result) => {
        result && navigate("/admin-dashboard/dashboard");
        Swal.fire({
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Username or Password is Wrong",
        });
      });
  };
  return (
    <section className="bg-gray-50 ">
      <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="mr-32">
          <img src={login} alt="" />
        </div>
        <div className="w-full bg-white rounded-2xl custom shadow-dark md:mt-0 sm:max-w-md xl:p-0">
          <Link
            href="#"
            className="flex items-center justify-center mb-6 text-2xl font-bold text-gray-900 pt-10 xl:pt-20"
          >
            <img className="w-16 h-16 mr-2" src={BetterSpace} alt="logo" />
            BETTER SPACE
          </Link>
          <div className="p-6 space-y-2 md:space-y-4 sm:p-8">
            <div className="flex flex-col items-start">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2x">
                Welcome Admin,
              </h1>
              <p className="text-base text-neutral-600">
                Lets login to manage the app
              </p>
            </div>
            <form onSubmit={() => { }} className="space-y-4 pt-4">
              <div>
                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    name="email"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="username"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Username
                  </label>
                </div>
              </div>
              <div>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                  >
                    Password
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <p className="font-normal text-sm text-neutral-500">
                  Forgot your password?
                  <Link
                    href="#"
                    className="text-sm font-normal pl-2 text-red-600 hover:underline"
                  >
                    Forgot password
                  </Link>
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
