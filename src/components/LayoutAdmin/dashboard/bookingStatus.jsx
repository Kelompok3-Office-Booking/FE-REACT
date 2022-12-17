import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const BookingStatus = () => {
  const dispatch = useDispatch();
  const listOfTransaction = useSelector((state) => state.transactions.data);

  const [loading, setLoading] = useState(true);
  const pageSize = 6;

  useEffect(() => {}, []);

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
                  <tr className="bg-white font-medium text-neutral-500">
                    <td className="py-4 px-6 font-medium  whitespace-nowrap  ">
                      Apple MacBook Pro 17"
                    </td>
                    <td className="py-4 px-6">Sliver</td>
                    <td className="py-4 px-6">Laptop</td>
                    <td className="py-4 px-6">$2999</td>
                    <td className="py-4 px-6">Laptop</td>
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
                  <tr className="bg-white font-medium text-neutral-500">
                    <td className="py-4 px-6 font-medium  whitespace-nowrap  ">
                      Apple MacBook Pro 17"
                    </td>
                    <td className="py-4 px-6">Sliver</td>
                    <td className="py-4 px-6">Laptop</td>
                    <td className="py-4 px-6">$2999</td>
                    <td className="py-4 px-6">Laptop</td>
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
                  <tr className="bg-white font-medium text-neutral-500">
                    <td className="py-4 px-6 font-medium  whitespace-nowrap  ">
                      Apple MacBook Pro 17"
                    </td>
                    <td className="py-4 px-6">Sliver</td>
                    <td className="py-4 px-6">Laptop</td>
                    <td className="py-4 px-6">$2999</td>
                    <td className="py-4 px-6">Laptop</td>
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
                  <tr className="bg-white font-medium text-neutral-500">
                    <td className="py-4 px-6 font-medium  whitespace-nowrap  ">
                      Apple MacBook Pro 17"
                    </td>
                    <td className="py-4 px-6">Sliver</td>
                    <td className="py-4 px-6">Laptop</td>
                    <td className="py-4 px-6">$2999</td>
                    <td className="py-4 px-6">Laptop</td>
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
                  <tr className="bg-white font-medium text-neutral-500">
                    <td className="py-4 px-6 font-medium  whitespace-nowrap  ">
                      Apple MacBook Pro 17"
                    </td>
                    <td className="py-4 px-6">Sliver</td>
                    <td className="py-4 px-6">Laptop</td>
                    <td className="py-4 px-6">$2999</td>
                    <td className="py-4 px-6">Laptop</td>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingStatus;
