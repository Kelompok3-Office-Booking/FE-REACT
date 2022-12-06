import React, { useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUser } from "store/Feature/FeatureUser/userSlice";
import ModalUpdateUser from "components/Modal/ModalUser";
import DeleteAllData from "components/Alert/deleteAllData";
import Swal from "sweetalert2";
import { Pagination } from "antd";
import TableHead from "./tableHead";
import APIUser from "apis/restApis/User";
import { ContentTableLoader } from "components";

const UserPage = () => {
  const dispatch = useDispatch();
  const listOfUser = useSelector((state) => state.users.data);
  const pageSize = 6;

  const [userList, setUserList] = useState(listOfUser);

  const [dataUser, setDataUser] = useState({
    minValue: 0,
    maxValue: 20,
  });

  const [searchWords, setSearchWords] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    APIUser.getAllUsers()
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
    setDataUser({
      minValue: 0,
      maxValue: 6,
    });

    const loweredSearchedWords = searchWords.toLowerCase();
    const updatedUserList = [];
    if (searchWords !== "") {
      listOfUser.forEach((user) => {
        const loweredUserName = user.full_name.toLowerCase();
        const emailUser = user.email;
        if (loweredUserName.includes(loweredSearchedWords) || emailUser.includes(loweredSearchedWords)) {
          updatedUserList.push(user);
        }
      })
      setUserList(updatedUserList);
    } else {
      setUserList(listOfUser);
    }

    // setUserList(listOfUser)
  }, [dispatch, listOfUser, searchWords]);

  const handleChangePage = (value) => {
    setDataUser({
      minValue: (value - 1) * pageSize,
      maxValue: value * pageSize,
    });
  };
  const handleShowList = async () => { };
  async function myDisplay() {
    let myPromise = new Promise(function (list) {
      setTimeout(function () {
        ("I love You !!");
      }, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }

  const handleSearch = (ev) => {
    setSearchWords(ev.target.value)
  }

  myDisplay();
  const HANDLEDELETE = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "focus:outline-none text-white bg-fifth hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
        cancelButton:
          "py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "The selected record will be permanently deleted. Are you want to continue",
        showCancelButton: true,
        confirmButtonText: "Yes, Delete",
        cancelButtonText: "No, cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          try {
            dispatch(deleteUser(id));
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          } catch (error) {
            return Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Delete is Failed ",
            });
          }
        }
      });
  };
  const HANDLEDELETEALL = () => {
    DeleteAllData();
  };
  // console.log(search)
  return (
    <>
      <div className="flex justify-between px-8 mb-4 py-6 w-full bg-white rounded-2xl shadow">
        <h1 className="text-2xl font-bold my-auto">User</h1>
      </div>
      <div className="w-full shadow-md rounded-2xl">
        <div className="flex justify-between rounded-2xl items-center py-4 bg-white px-4">
          <div className="my-auto flex rounded-2xl">
            <h1 className="inline pr-4 my-auto text-base text-neutral-500">
              ({listOfUser?.length}) Record Found
            </h1>
            <button
              type="button"
              onClick={HANDLEDELETEALL}
              className="text-white bg-fifth hover:bg-red-400 font-medium rounded-full text-sm px-5 py-2.5 flex text-center mr-2 mb-2"
            >
              <DeleteForeverIcon className="text-white" />
              <p className="my-auto">Delete Selected</p>
            </button>
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative rounded-2xl">
            <div className="flex absolute  inset-y-0 left-0 items-center pl-3 pointer-events-none rounded-2xl">
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
              onChange={(ev) => handleSearch(ev)}
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
        <table className=" w-full text-sm text-left text-gray-500 ">
          {
            loading
              ?
              <>
                {/* <TableHead /> */}
                <ContentTableLoader />
              </>
              :
              <>
                <TableHead />
                <tbody>
                  {
                    userList
                      ?.slice(dataUser.minValue, dataUser.maxValue)
                      .map((user) => (
                        <tr
                          className="bg-white border-b  hover:bg-gray-50"
                          key={user.id}
                        >
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
                          <td className="py-4 px-6">{user.full_name}</td>
                          <td className="py-4 px-6">{user.gender}</td>
                          <td className="py-4 px-6">{user.email}</td>
                          <td className="py-4 px-6 flex gap-2 items-center justify-center ">
                            {/* Modal toggle */}
                            <button
                              type="button"
                              onClick={() => HANDLEDELETE(user.id)}
                              data-modal-toggle="editUserModal"
                              className=" px-2 py-2 font-medium bg-slate-100 hover:underline rounded-lg hover:bg-red-700 text-white"
                            >
                              <DeleteForeverIcon className="text-slate-500 hover:text-white" />
                            </button>
                            <ModalUpdateUser dataUser={user} />
                          </td>
                        </tr>
                      ))
                  }
                </tbody>
              </>
          }
        </table>
      </div>
      <div className="mt-8 text-start">
        <Pagination
          defaultCurrent={1}
          defaultPageSize={pageSize}
          // current={dataReview.current}
          total={userList?.length}
          onChange={handleChangePage}
        />
      </div>
    </>
  );
};

export default UserPage;