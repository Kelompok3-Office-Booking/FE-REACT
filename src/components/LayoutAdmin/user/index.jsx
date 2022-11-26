import React, { useEffect } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "store/Feature/FeatureUser/userSlice";
import DeleteAlert from "components/Alert/deleteAlert";
import { ModalUpdateUser } from "components/Modal";
import { Arrow } from "assets";
import DeleteAllData from "components/Alert/deleteAllData";

const UserPage = () => {
  const dispatch = useDispatch();
  const listOfUser = useSelector((state) => state.users.data);
  console.log(listOfUser);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const HANDLEDELETE = () => {
    DeleteAlert();
  };
  const HANDLEDELETEALL = () => {
    DeleteAllData();
  };

  return (
    <>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <div className="flex justify-between items-center py-4 bg-white px-4">
          <div>
            <h1 className="inline pr-4 text-base text-neutral-500">
              (7) Record Found
            </h1>

            <button
              type="button"
              onClick={HANDLEDELETEALL}
              className="text-white bg-fifth hover:bg-red-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              <DeleteForeverIcon className="text-white" />
              Delete Selected
            </button>
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 "
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
        <table className=" w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-500 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">
                  User ID
                  <button>
                    <img src={Arrow} alt="arrow" />
                  </button>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">
                  Full Name
                  <button>
                    <img src={Arrow} alt="arrow" />
                  </button>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">
                  Gender
                  <button>
                    <img src={Arrow} alt="arrow" />
                  </button>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">
                  Email Address
                  <button>
                    <img src={Arrow} alt="arrow" />
                  </button>
                </div>
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {listOfUser.map((user) => (
              <tr className="bg-white border-b  hover:bg-gray-50" key={user.id}>
                <td className="p-4 w-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 "
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="py-4 px-6">{user.id}</td>
                <td className="py-4 px-6">{user.fullName}</td>
                <td className="py-4 px-6">{user.gender}</td>
                <td className="py-4 px-6">{user.email}</td>
                <td className="py-4 px-6 flex gap-2 items-center justify-center ">
                  {/* Modal toggle */}
                  <button
                    type="button"
                    onClick={HANDLEDELETE}
                    data-modal-toggle="editUserModal"
                    className=" px-2 py-2 font-medium bg-slate-100 hover:underline rounded-lg hover:bg-red-700 text-white"
                  >
                    <DeleteForeverIcon className="text-slate-500 hover:text-white" />
                  </button>
                  <ModalUpdateUser />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserPage;
