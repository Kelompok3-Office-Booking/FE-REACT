import { items } from "assets";
import { ContentTableLoader } from "components";
import jsConvert from "js-convert-case";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { fetchTransaction } from "store/Feature/FeatureTransaction/transactionSlice";

const TopValueTransaction = ({
  dispatch,
  listOfTransaction
}) => {
  const [topValueList, setValueList] = useState(listOfTransaction);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // dispatch(fetchTransaction())
    //   .then((res) => {
    //     let totalPrice = 0;
    //     const priceAverage = totalPrice / listOfTransaction.length
    //     if (listOfTransaction > 0) {
    //       listOfTransaction.forEach((transaksi) => {
    //         totalPrice += transaksi.price
    //       })
    //     }

    //     const updateTopValueTransaksi = [];
    //     listOfTransaction.forEach((transaksi) => {
    //       if (transaksi.price > priceAverage) {
    //         updateTopValueTransaksi.push(transaksi);
    //       }
    //     })
    //     setValueList(updateTopValueTransaksi)
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // let totalPrice = 0;
    // const priceAverage = totalPrice / listOfTransaction.length
    // if (listOfTransaction > 0) {
    //   listOfTransaction.forEach((transaksi) => {
    //     totalPrice += transaksi.price
    //   })
    // }

    const updateTopValueTransaksi = [];
    listOfTransaction.forEach((transaksi) => {
      if (transaksi.price > 1000000) {
        updateTopValueTransaksi.push(transaksi);
      }
    })
    setValueList(updateTopValueTransaksi)
    setLoading(false);
  }, [])

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <section className="mt-10 w-full flex flex-col bg-white rounded-3xl drop-shadow-4xl">
        <div className="p-6 space-y-6">
          <div>
            <h1 className="font-bold text-2xl text-left">
              Top Value Transaction
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
                            Photo
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Name
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Price
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Office Name
                          </th>
                          <th scope="col" className="py-3 px-6">
                            Type
                          </th>
                          <th scope="col" className="py-3 px-6 rounded-r-2xl">
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          topValueList
                            ?.slice(0, 5).map((transaksi) => (
                              <tr className="bg-white font-medium text-neutral-500">
                                <td className="py-4 px-6 font-medium  whitespace-nowrap ">
                                  <img
                                    src={items}
                                    className="rounded-full max-w-[40px]"
                                    alt="img"
                                  />
                                </td>
                                <td className="py-4 px-6">{jsConvert.toHeaderCase(transaksi.user.full_name)}</td>
                                <td className="py-4 px-6">
                                  <CurrencyFormat value={transaksi.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} renderText={value => <div>{value}</div>} />
                                </td>
                                <td className="py-4 px-6">{jsConvert.toHeaderCase(transaksi.office.office_name)}</td>
                                <td className="py-4 px-6">{jsConvert.toHeaderCase(transaksi.office.office_type)}</td>
                                <td className="py-4 px-6">{jsConvert.toHeaderCase(transaksi.check_in.date)}</td>
                              </tr>
                            ))
                        }

                      </tbody>
                    </>
                }
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopValueTransaction;
