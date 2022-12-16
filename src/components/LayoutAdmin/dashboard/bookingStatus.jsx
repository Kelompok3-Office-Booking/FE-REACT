import { Pagination } from "antd";
import { ContentTableLoader } from "components";
import jsConvert from "js-convert-case";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransaction, updateTransaction } from "store/Feature/FeatureTransaction/transactionSlice";
import CurrencyFormat from 'react-currency-format';
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import CloseIcon from '@mui/icons-material/Close';
import { checkbox } from "assets";

const BookingStatus = ({
  dispatch,
  listOfTransaction
}) => {
  const [transaksiList, setTransaksiList] = useState(listOfTransaction);

  const [loading, setLoading] = useState(true);
  const pageSize = 6;

  const [dataTransaksi, setDataTransaksi] = useState({
    minValue: 0,
    maxValue: 20,
  });

  const handleChange = (value) => {
    setDataTransaksi({
      minValue: (value - 1) * pageSize,
      maxValue: value * pageSize,
    });
  };

  const setReload = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(fetchTransaction())
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    // dispatch(fetchTransaction())
    //   .then((res) => {
    //     // setTransaksiList(res.payload);
    //     const updateListOnProcess = [];
    //     res.payload.forEach((transaksi) => {
    //       const loweredStatus = transaksi.status.toLowerCase();
    //       if (loweredStatus.includes("on process")) {
    //         updateListOnProcess.push(transaksi)
    //       }
    //     })
    //     setTransaksiList(updateListOnProcess);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    const updateListOnProcess = [];
    listOfTransaction.forEach((transaksi) => {
      const loweredStatus = transaksi.status.toLowerCase();
      if (loweredStatus.includes("on process")) {
        updateListOnProcess.push(transaksi)
      }
    })
    setTransaksiList(updateListOnProcess);
    setLoading(false);

    setDataTransaksi({
      minValue: 0,
      maxValue: 6,
    });
  }, [dispatch])

  const handleChangeReject = (id) => {
    try {
      dispatch(updateTransaction({ id, status: "rejected" }))
      setReload();
      toast.custom((t) => (
        <div
          className={`${t.visible ? 'animate-enter ease-in-out duration-200' : 'animate-leave ease-in-out duration-200'
            } max-w-md w-80 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src={checkbox}
                  alt=""
                />
              </div>
              <div className="ml-3 flex-col text-start">
                <p className="text-sm font-bold text-success">
                  Success
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Successfully Updated
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-slate-400 hover:text-slate-600 focus:outline-none"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      ))
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Edit Transaction Fail",
      });
    }
  }

  const handleChangeAccept = (id) => {
    try {
      dispatch(updateTransaction({ id, status: "accepted" }))
      setReload();
      toast.custom((t) => (
        <div
          className={`${t.visible ? 'animate-enter ease-in-out duration-200' : 'animate-leave ease-in-out duration-200'
            } max-w-md w-80 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src={checkbox}
                  alt=""
                />
              </div>
              <div className="ml-3 flex-col text-start">
                <p className="text-sm font-bold text-success">
                  Success
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Successfully Updated
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-slate-400 hover:text-slate-600 focus:outline-none"
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      ))
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Edit Transaction Fail",
      });
    }
  }
  // console.log(transaksiList);

  return (
    <>
      <section className="mt-10 flex flex-col bg-white rounded-3xl drop-shadow-4xl">
        <div className="p-6 space-y-6">
          <div>
            <h1 className="font-bold text-2xl text-left">
              Recent Status Booking
            </h1>
          </div>
          <div>
            <div className="overflow-x-auto relative">
              <table className="w-full text-sm text-left text-gray-500 space-y-6 ">
                {
                  loading
                    ?
                    <ContentTableLoader />
                    :
                    <>
                      <thead className="text-xs text-gray-700 uppercase bg-gray-100 ">
                        <tr>
                          <th scope="col" className="py-3 px-6 rounded-l-2xl">
                            Date
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Name
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Type
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Office Name
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Price(Rp)
                          </th>
                          <th scope="col" className="py-3 px-6 rounded-r-2xl">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          transaksiList
                            ?.slice(dataTransaksi.minValue, dataTransaksi.maxValue)
                            .map((transaksi) => (
                              <tr className="bg-white font-medium text-neutral-500" key={transaksi.id}>
                                <td className="py-4 px-6 font-medium  whitespace-nowrap  ">
                                  {transaksi.check_in.date}
                                </td>
                                <td className="py-4 px-6">{transaksi.user.full_name}</td>
                                <td className="py-4 px-6">{jsConvert.toHeaderCase(transaksi.office.office_type)}</td>
                                <td className="py-4 px-6">{jsConvert.toHeaderCase(transaksi.office.office_name)}</td>
                                <td className="py-4 px-6">
                                  <CurrencyFormat value={transaksi.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <div>{value}</div>} />
                                </td>
                                <td className="py-4 px-6">
                                  <div className="flex items-center gap-2">
                                    <button onClick={() => handleChangeReject(transaksi.id)} className="py-2 px-4 text-sixth bg-[#FBE0DB] rounded-lg" value="rejected">
                                      Reject
                                    </button>
                                    <button onClick={() => handleChangeAccept(transaksi.id)} className="py-2 px-4 text-[#45AF49] bg-[#DAEFDB] rounded-lg" value="accepted">
                                      Accept
                                    </button>
                                  </div>
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
                total={transaksiList?.length}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingStatus;
