import React, { useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransaction } from "store/Feature/FeatureTransaction/transactionSlice";
import DeleteAlert from "components/Alert/deleteAlert";
import ModalUpdateTransaksi from "components/Modal/ModalTransaksi";
import DeleteAllData from "components/Alert/deleteAllData";
import ModalViewTransaction from "components/Modal/ModalTransaksi/viewModal";
import THead from "./tableHeader";
import { ContentTableLoader } from "components";
import { Helmet } from "react-helmet";
import { Pagination } from "antd";
import DeleteTransaction from "components/Modal/ModalTransaksi/DeleteTransaction";

const TransactionPage = () => {
  const dispatch = useDispatch();
  const listOfTransaction = useSelector((state) => state.transaction);
  const [loading, setLoading] = useState(false);
  const pageSize = 6;

  const [dataTransaksi, setDataTransaksi] = useState({
    minValue: 0,
    maxValue: 20,
  });

  const [user, setUser] = [];

  useEffect(() => {
    dispatch(fetchTransaction());
    setLoading(false);
    setDataTransaksi({
      minValue: 0,
      maxValue: 6,
    });
  }, [dispatch, loading, user]);

  const HANDLEDELETE = (id) => {
    DeleteAlert(id);
  };
  const HANDLEDELETEALL = () => {
    DeleteAllData();
  };

  const setReload = () => {
    setLoading(true);
  };

  const handleChange = (value) => {
    setDataTransaksi({
      minValue: (value - 1) * pageSize,
      maxValue: value * pageSize,
    });
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | Transactions</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="min-h-screen">
        <div className="flex justify-between px-8 mb-4 py-6 w-full bg-white rounded-2xl shadow">
          <h1 className="text-2xl font-bold my-auto">Transaction</h1>
        </div>
        <div className="overflow-x-auto relative shadow-md rounded-2xl">
          <div className="flex justify-between items-center rounded-2xl py-4 bg-white px-4">
            <div className="flex">
              <h1 className="inline pr-4 text-base my-auto text-neutral-500">
                ({listOfTransaction.data?.length}) Record Found
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
          <table className="w-full text-sm text-left text-gray-500 ">
            <THead />
            <tbody>
              {loading ? (
                <ContentTableLoader />
              ) : (
                listOfTransaction &&
                listOfTransaction.data?.length > 0 &&
                listOfTransaction.data
                  ?.slice(dataTransaksi.minValue, dataTransaksi.maxValue)
                  .map((transaction) => (
                    <tr
                      className="bg-white border-b hover:bg-gray-50"
                      key={transaction.id}
                    >
                      <td className="p-4 w-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                          />
                          <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="py-4 px-6">{transaction.id}</td>
                      <td className="py-4 px-6">
                        {transaction.user?.fullName}
                      </td>
                      <td className="py-4 px-6">{transaction.type}</td>
                      <td className="py-4 px-6">{transaction.date}</td>
                      <td className="py-4 px-6">{transaction.nominal}</td>
                      <td id="status" className="py-4 px-6">
                        <span
                          className={`${
                            transaction.status === "On Process"
                              ? "bg-blue-200 rounded-2xl border-2 border-blue-500 py-1 px-4"
                              : transaction.status === "Confirmed"
                              ? "bg-green-200 rounded-2xl border-2 border-green-500 py-1 px-4"
                              : transaction.status === "Pending"
                              ? "bg-gray-200 rounded-2xl border-2 border-gray-300 py-1 px-4"
                              : transaction.status === "Cancelled"
                              ? "bg-red-200 rounded-2xl border-2 border-red-500 py-1 px-4"
                              : "bg-slate-100 rounded-2xl border-2 border-slate-100 py-1 px-4"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 flex gap-2 items-center justify-center">
                        {/* Modal toggle */}
                        <ModalViewTransaction />
                        <DeleteTransaction
                          idTransaksi={transaction.id}
                          loading={loading}
                          setReload={setReload}
                        />
                        <ModalUpdateTransaksi />
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-start">
          <Pagination
            defaultCurrent={1}
            defaultPageSize={pageSize}
            // current={dataReview.current}
            total={listOfTransaction.data?.length}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

// const status = document.getElementById("status");
// if (status === "On Process") {
//   status.style = "bg-black"
// }

export default TransactionPage;
