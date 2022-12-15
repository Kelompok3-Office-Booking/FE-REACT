import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BookingStatus from "./bookingStatus";
import TransactionChart from "./chart";
import ItemsData from "./itemsData";
import TopValueTransaction from "./topValueTransaction";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const listOfTransaction = useSelector((state) => state.transactions.data);

  return (
    <>
      <ItemsData />
      <TransactionChart />
      <BookingStatus dispatch={dispatch} listOfTransaction={listOfTransaction} />
      <TopValueTransaction dispatch={dispatch} listOfTransaction={listOfTransaction} />
    </>
  );
};

export default DashboardPage;
