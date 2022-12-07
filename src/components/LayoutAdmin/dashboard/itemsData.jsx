import React, { useEffect } from "react";
import { items, items2, items3, items4 } from "assets";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "store/Feature/FeatureUser/userSlice";


const ItemsData = () => {
  const dispatch = useDispatch();
  const listOfUser = useSelector((state) => state.users.data);

  useEffect(() => {
    dispatch(fetchUsers())
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div className="flex gap-4 mt-2">
      <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-3 bg-white rounded-2xl drop-shadow-4xl">
        <div className="flex w-full">
          <div>
            <div className="pl-2">
              <img src={items} alt="user" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center pl-3">
            <div>
              <h1 className="font-bold text-3xl">{listOfUser?.length}</h1>
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
      <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-3 bg-white rounded-2xl drop-shadow-4xl">
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
      <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-3 bg-white rounded-2xl drop-shadow-4xl">
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
      <div className="flex flex-wrap flex-row sm:flex-col justify-center items-center w-full sm:w-1/4 p-3 bg-white rounded-2xl drop-shadow-4xl">
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
