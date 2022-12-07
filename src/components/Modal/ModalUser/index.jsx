import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import { CloseOutlined } from "@ant-design/icons";
import { updateUser } from "store/Feature/FeatureUser/userSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

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
      className={`${className} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
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
    id: dataUser.id,
    full_name: dataUser.full_name,
    gender: dataUser.gender,
    email: dataUser.email,
  });

  const { id, full_name, gender, email } = data;
  const dispatch = useDispatch();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(updateUser({ id, full_name, gender, email }));
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Edit Users Success",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Edit Users Fail",
      });
    }
  };
  // console.log(dataUser.photo);
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
        <div className="flex flex-row bg-black bg-opacity-30 overflow-y-auto overflow-x-hidden fixed left-0 top-0 z-50 justify-center items-center p-4 w-full md:inset-0 h-modal md:h-full">
          <div className="bg-white rounded-2xl px-20 py-12 w-1/4 absolute z-50 drop-shadow-4xl transform -translate-y-0 scale-125 transition-opacity transition-transform duration-300 center">
            <div className="absolute">
              <button onClick={HANDLEMODAL}>
                <CloseOutlined className="relative text-xl -top-6 right-12" />
              </button>
            </div>
            <div className="text-start pb-6">
              <h1 className="text-2xl font-bold text-gray-600">Edit User</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="pb-6">
                <InputField
                  name="full_name"
                  label="Full Name"
                  placeholder="Full Name"
                  type="text"
                  onClick={() => {}}
                  defaultValue={reset ? dataUser.full_name : ""}
                  onChange={(ev) => setHandleChangeData(ev)}
                />
              </div>
              <div className="pb-6">
                <InputField
                  name="gender"
                  label="Gender"
                  placeholder="Gender"
                  type="text"
                  onClick={() => {}}
                  defaultValue={reset ? dataUser.gender : ""}
                  onChange={(ev) => setHandleChangeData(ev)}
                />
              </div>
              <div className="pb-6">
                <InputField
                  name="email"
                  label="Email"
                  placeholder="Email"
                  type="email"
                  onClick={() => {}}
                  defaultValue={reset ? dataUser.email : ""}
                  onChange={(ev) => setHandleChangeData(ev)}
                />
              </div>
              <div className="w-full flex justify-between">
                <button
                  type="reset"
                  onClick={handleReset}
                  className="w-1/2 border-2 border-success rounded-lg text-success mr-2 hover:bg-success hover:text-white"
                >
                  {reset ? "Reset" : "Cancel"}
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-success ml-2 text-white py-3 rounded-lg hover:bg-opacity-70"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalUpdateUser;
