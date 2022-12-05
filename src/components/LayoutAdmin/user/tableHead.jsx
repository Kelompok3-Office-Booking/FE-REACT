import React from "react";
import { Arrow } from "assets";
const TableHead = () => {
  return (
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
  );
};

export default TableHead;