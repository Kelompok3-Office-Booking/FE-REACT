import { items } from "assets";
import React from "react";
import { Helmet } from "react-helmet";

const TopValueTransaction = () => {
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
                  <tr className="bg-white font-medium text-neutral-500">
                    <td className="py-4 px-6 font-medium  whitespace-nowrap ">
                      <img
                        src={items}
                        className="rounded-full max-w-[40px]"
                        alt="img"
                      />
                    </td>
                    <td className="py-4 px-6">Sliver</td>
                    <td className="py-4 px-6">Laptop</td>
                    <td className="py-4 px-6">$2999</td>
                    <td className="py-4 px-6">Laptop</td>
                    <td className="py-4 px-6">Data</td>
                  </tr>
                  <tr className="bg-white font-medium text-neutral-500">
                    <td className="py-4 px-6 font-medium  whitespace-nowrap ">
                      <img
                        src={items}
                        className="rounded-full max-w-[40px]"
                        alt="img"
                      />
                    </td>
                    <td className="py-4 px-6">Sliver</td>
                    <td className="py-4 px-6">Laptop</td>
                    <td className="py-4 px-6">$2999</td>
                    <td className="py-4 px-6">Laptop</td>
                    <td className="py-4 px-6">Data</td>
                  </tr>
                  <tr className="bg-white font-medium text-neutral-500">
                    <td className="py-4 px-6 font-medium  whitespace-nowrap ">
                      <img
                        src={items}
                        className="rounded-full max-w-[40px]"
                        alt="img"
                      />
                    </td>
                    <td className="py-4 px-6">Sliver</td>
                    <td className="py-4 px-6">Laptop</td>
                    <td className="py-4 px-6">$2999</td>
                    <td className="py-4 px-6">Laptop</td>
                    <td className="py-4 px-6">Data</td>
                  </tr>
                  <tr className="bg-white font-medium text-neutral-500">
                    <td className="py-4 px-6 font-medium  whitespace-nowrap ">
                      <img
                        src={items}
                        className="rounded-full max-w-[40px]"
                        alt="img"
                      />
                    </td>
                    <td className="py-4 px-6">Sliver</td>
                    <td className="py-4 px-6">Laptop</td>
                    <td className="py-4 px-6">$2999</td>
                    <td className="py-4 px-6">Laptop</td>
                    <td className="py-4 px-6">Data</td>
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

export default TopValueTransaction;
