import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ModalUpdateTransaksi = () => {
  const [modal, setModal] = useState(false);
  const [age, setAge] = useState("");

  const handleChange = (e) => {
    setAge(e.target.value);
  };
  const HANDLEMODAL = () => {
    setModal(!modal);
  };

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
            <form action="#" className="relative bg-white rounded-lg shadow ">
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
              <div className="py-2 px-6 space-y-6">
                <div className="px-6 lg:px-8 space-y-4">
                  <h3 className="mb-4 text-xl font-medium text-neutral-700 ">
                    Edit Transaction
                  </h3>
                  <div className="space-y-6">
                    <FormControl fullWidth>
                      <InputLabel
                        id="demo-simple-select-label"
                        className="bg-white"
                      >
                        Status Booking
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                      >
                        <MenuItem value="Reject">Reject</MenuItem>
                        <MenuItem value="Accept">Accept</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-neutral-500 bg-transparent rounded-lg border-2 border-neutral-400 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      Full Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-neutral-500 bg-transparent rounded-lg border-2 border-neutral-400 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      Type
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-neutral-500 bg-transparent rounded-lg border-2 border-neutral-400 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      Date
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="floating_outlined"
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-neutral-500 bg-transparent rounded-lg border-2 border-neutral-400 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_outlined"
                      className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                    >
                      Status
                    </label>
                  </div>

                  {/* Modal footer */}
                  <div className="flex gap-5 ">
                    <button
                      type="button"
                      className="w-1/2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-400 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:z-10 focus:ring-4 focus:ring-gray-200"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="w-1/2 text-white bg-sixth hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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

export default ModalUpdateTransaksi;
