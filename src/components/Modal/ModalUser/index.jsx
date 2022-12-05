import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";

const InputField = ({
  name,
  label,
  defaultValue,
  placeholder,
  onClick,
  onChange,
  className = "border-gray-400",
  type = "text",
  disabled,
  autoComplete = "off",
}) => (
  <div className="relative">
    <input
      type={type}
      id="floating_outlined"
      className={`${className} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      disabled={disabled}
      autoComplete={autoComplete}
      onClick={onClick}
      defaultValue={defaultValue}
    />
    <label
      htmlFor="floating_outlined"
      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
    >
      {label}
    </label>
  </div>
);

const ModalUpdateUser = ({ dataUser }) => {
  const [modal, setModal] = useState(false);
  const [reset, setReset] = useState(true);
  const [data, setData] = useState({
    full_name: dataUser.full_name,
    gender: dataUser.gender,
    email: dataUser.email,
  });

  useEffect(() => {
    setReset(true);
  }, []);

  const HANDLEMODAL = () => {
    setModal(!modal);
    setReset(true);
  };

  const setHandleChangeData = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleReset = () => {
    setReset(!reset);
    // console.log(reset);
  };

  const handleSubmit = () => {};
  // console.log(dataUser);
  return (
    <>
      <button
        onClick={HANDLEMODAL}
        type="button"
        data-modal-toggle="editUserModal"
        className="px-2 py-2 font-medium bg-slate-100 hover:underline rounded-lg hover:bg-blue-600"
      >
        <CreateIcon className="text-slate-500 hover:text-white" />
      </button>
      {/* Edit user modal */}
      {modal && (
        <div
          id="editUserModal"
          tabIndex={-1}
          aria-hidden="true"
          className="flex flex-row overflow-y-auto overflow-x-hidden fixed left-0 top-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full"
        >
          <div className="relative w-full max-w-lg h-full md:h-auto">
            {/* Modal content */}
            <form
              onSubmit={handleSubmit}
              className="relative pb-6 bg-white rounded-lg shadow "
            >
              {/* Modal header */}
              <div className="p-2 rounded-t border-b">
                <button
                  onClick={HANDLEMODAL}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                  data-modal-toggle="editUserModal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {/* Modal body */}
              <div className="py-2 px-6 pt-6 space-y-6">
                <div className="px-6 lg:px-8 space-y-4">
                  <h3 className="mb-4 text-xl font-medium text-neutral-700 ">
                    Edit User
                  </h3>
                  <InputField
                    name="fullName"
                    label="Full Name"
                    placeholder="Full Name"
                    type="text"
                    onClick={() => {}}
                    defaultValue={reset ? dataUser.full_name : ""}
                    onChange={(ev) => setHandleChangeData(ev)}
                  />
                  <InputField
                    name="gender"
                    label="Gender"
                    placeholder="Gender"
                    type="text"
                    onClick={() => {}}
                    defaultValue={reset ? dataUser.gender : ""}
                    onChange={(ev) => setHandleChangeData(ev)}
                  />
                  <InputField
                    name="email"
                    label="Email"
                    placeholder="Email"
                    type="email"
                    onClick={() => {}}
                    defaultValue={reset ? dataUser.email : ""}
                    onChange={(ev) => setHandleChangeData(ev)}
                  />
                  {/* Modal footer */}
                  <div className="flex gap-5 ">
                    <button
                      type="reset"
                      onClick={handleReset}
                      className="w-1/2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-400 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:z-10 focus:ring-4 focus:ring-gray-200"
                    >
                      {reset ? "Reset" : "Cancel"}
                    </button>
                    <button
                      type="submit"
                      className="w-1/2 text-white mb-2 bg-success hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalUpdateUser;
