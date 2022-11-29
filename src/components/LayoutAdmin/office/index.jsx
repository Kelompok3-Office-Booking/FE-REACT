import AddOffice from "components/Modal/ModalOffice/AddOffice";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import ViewOffice from "components/Modal/ModalOffice/ViewOffice";

const OfficePage = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex justify-between px-8 py-4 w-full bg-white rounded-2xl shadow">
          <h1 className="text-3xl font-bold my-auto">Office</h1>
          <div className="flex content-center pl-12 rounded-xl text-lg py-2">
            <Link
              to={"/admin-dashboard/addOffice"}
              className="flex py-2 pl-10 pr-12 bg-blue-600 text-white rounded-xl"
            >
              <PlusOutlined className="mr-4 my-auto text-xl mb-1" />
              <p className="my-auto">Add</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="py-8">
        <Link to={"/admin-dashboard/editOffice"}>Edit anjir</Link>
        <button>
          <ViewOffice />
        </button>
      </div>
    </>
  );
};

export default OfficePage;
