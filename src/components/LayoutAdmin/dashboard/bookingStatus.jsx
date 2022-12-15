import { Pagination } from "antd";
import { ContentTableLoader } from "components";
import jsConvert from "js-convert-case";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransaction } from "store/Feature/FeatureTransaction/transactionSlice";
import CurrencyFormat from 'react-currency-format';

const BookingStatus = () => {

  const dispatch = useDispatch();
  const listOfTransaction = useSelector((state) => state.transactions.data);
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

  useEffect(() => {
    dispatch(fetchTransaction())
      .then((res) => {
        const updateListOnProcess = [];
        listOfTransaction.forEach((transaksi) => {
          const loweredStatus = transaksi.status.toLowerCase();
          if (loweredStatus.includes("on process")) {
            updateListOnProcess.push(transaksi)
          }
        })
        setTransaksiList(updateListOnProcess);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });



    setDataTransaksi({
      minValue: 0,
      maxValue: 6,
    });
  }, [dispatch])

  console.log(transaksiList);

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
                    loading
                      ?
                      <ContentTableLoader />
                      :
                      <>
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
                                    <button className="py-2 px-4 text-sixth bg-[#FBE0DB] rounded-lg">
                                      Reject
                                    </button>
                                    <button className="py-2 px-4 text-[#45AF49] bg-[#DAEFDB] rounded-lg">
                                      Accept
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))
                        }
                      </>
                  }
                </tbody>
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
