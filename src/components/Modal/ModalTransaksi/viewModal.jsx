import React, { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const ModalViewTransaction = () => {
  const [modal, setModal] = useState(false);
  const HANDLEMODAL = () => {
    setModal(!modal);
  };
  return (
    <>
      <button
        onClick={HANDLEMODAL}
        type="button"
        data-modal-toggle="editUserModal"
        className=" p-2 font-medium bg-slate-100 hover:underline rounded-lg hover:bg-blue-600"
      >
        <RemoveRedEyeIcon className="text-slate-500 hover:text-white" />
      </button>
      {/* Edit user modal */}
      {modal && (
        <div className={` transition-transform absolute`}>
          <div
            id="extralarge-modal"
            tabIndex={-1}
            className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50  mr-0 md:h-full transition duration-300"
          >
            <div className="relative w-full max-w-lg h-full md:h-auto">
              {/* Modal content */}
              <form
                onSubmit={() => { }}
                className="relative bg-white rounded-tl-3xl rounded-bl-3xl shadow "
              >
                {/* Modal header */}
                <div className="p-3 absolute rounded-t">
                  <button
                    onClick={HANDLEMODAL}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center ease-in-out delay-100"
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
                <div className="py-8 px-6 space-y-2">
                  <div className="px-6 lg:px-8 space-y-4">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 ">
                      Detail Transaction
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type="text"
                          id="transaction_id"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium text-neutral-400 bg-transparent rounded-lg border-2 border-neutral-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="transaction_id"
                          className="absolute text-sm font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                          Transaction ID
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="status"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium text-neutral-400 bg-transparent rounded-lg border-2 border-neutral-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="status"
                          className="absolute text-sm font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                          Status Booking
                        </label>
                      </div>
                      <div className="col-span-2 relative">
                        <input
                          type="text"
                          id="fullName"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium text-neutral-400 bg-transparent rounded-lg border-2 border-neutral-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="fullName"
                          className="absolute text-sm font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                          Full Name
                        </label>
                      </div>
                      <div className="col-span-2 relative">
                        <input
                          type="text"
                          id="email"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium text-neutral-400 bg-transparent rounded-lg border-2 border-neutral-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="email"
                          className="absolute text-sm font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                          Email Address
                        </label>
                      </div>
                      <div className="col-span-2 relative">
                        <input
                          type="text"
                          id="office"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium text-neutral-400 bg-transparent rounded-lg border-2 border-neutral-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="office"
                          className="absolute text-sm font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                          Office Name
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="date"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium text-neutral-400 bg-transparent rounded-lg border-2 border-neutral-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="date"
                          className="absolute text-sm font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                          Date
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="checkin"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium text-neutral-400 bg-transparent rounded-lg border-2 border-neutral-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="checkin"
                          className="absolute text-sm font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                          Check in
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="time"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium text-neutral-400 bg-transparent rounded-lg border-2 border-neutral-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="time"
                          className="absolute text-sm font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                          Time
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="duration"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium text-neutral-400 bg-transparent rounded-lg border-2 border-neutral-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="duration"
                          className="absolute text-sm font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                          Duration
                        </label>
                      </div>
                      <div className="col-span-2 relative">
                        <input
                          type="text"
                          id="welcomeDrink"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium text-neutral-400 bg-transparent rounded-lg border-2 border-neutral-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="welcomeDrink"
                          className="absolute text-sm font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                          Wellcome Drink
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="total"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium text-neutral-400 bg-transparent rounded-lg border-2 border-neutral-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="total"
                          className="absolute text-sm font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                          Total Price
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="payment"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium text-neutral-400 bg-transparent rounded-lg border-2 border-neutral-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="payment"
                          className="absolute text-sm font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                          Payment Method
                        </label>
                      </div>
                      <div className="col-span-2 relative">
                        <input
                          type="text"
                          id="priceMonth"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium text-neutral-400 bg-transparent rounded-lg border-2 border-neutral-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="priceMonth"
                          className="absolute text-sm font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                          Price / Month
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="service"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium text-neutral-400 bg-transparent rounded-lg border-2 border-neutral-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="service"
                          className="absolute text-sm font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                          Service
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          id="ppn"
                          className="block px-2.5 pb-2.5 pt-4 w-full text-sm font-medium text-neutral-400 bg-transparent rounded-lg border-2 border-neutral-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                          placeholder=" "
                        />
                        <label
                          htmlFor="ppn"
                          className="absolute text-sm font-medium text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                        >
                          PPN(11%)
                        </label>
                      </div>
                    </div>

                    {/* Modal footer */}
                    <div className="flex gap-5 ">
                      <button
                        type="button"
                        onClick={HANDLEMODAL}
                        className="w-1/2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-400 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-500 focus:z-10 focus:ring-4 focus:ring-gray-200"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="w-1/2 text-white bg-success hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalViewTransaction;
