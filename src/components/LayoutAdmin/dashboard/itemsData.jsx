import React from "react";
import { items, items2, items3, items4 } from "assets";

const ItemsData = () => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-3 bg-white rounded-2xl shadow-card">
        <div className="flex w-full">
          <div>
            <div className="pl-2">
              <img src={items} alt="user" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center pl-3">
            <div>
              <h1 className="font-bold text-3xl">303</h1>
              <p className="text-base font-normal text-neutral-400 text-left">
                Users
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="font-normal text-start text-base text-neutral-500 pt-3">
            <span className="text-eigth text-left">{`12 `}</span>Users joined
            this week
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-3 bg-white rounded-2xl shadow-card">
        <div className="flex w-full">
          <div>
            <div className="pl-2">
              <img src={items2} alt="user" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center pl-3">
            <div>
              <h1 className="font-bold text-3xl">303</h1>
              <p className="text-base font-normal text-neutral-400 text-left">
                Office
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="font-normal text-start text-base text-neutral-500 pt-3">
            <span className="text-sixth text-left">{`20 `}</span>Offices Add
            this week
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-3 bg-white rounded-2xl shadow-card">
        <div className="flex w-full">
          <div>
            <div className="pl-2">
              <img src={items3} alt="user" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center pl-3">
            <div>
              <h1 className="font-bold text-3xl text-left">1.403</h1>
              <p className="text-base font-normal text-neutral-400 text-left">
                Transaction
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="font-normal text-start text-base text-neutral-500 pt-3">
            <span className="text-seventh text-left">{`100 `}</span>
            Transaction this week
          </div>
        </div>
      </div>
      <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-3 bg-white rounded-2xl shadow-card">
        <div className="flex w-full">
          <div>
            <div className="pl-2">
              <img src={items4} alt="user" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center pl-3">
            <div>
              <h1 className="font-bold text-3xl">303</h1>
              <p className="text-base font-normal text-neutral-400 text-left">
                Review
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="font-normal text-start text-base text-neutral-500 pt-3">
            <span className="text-blue-700 text-left">{`12 `}</span>Review Added
            this week
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsData;
