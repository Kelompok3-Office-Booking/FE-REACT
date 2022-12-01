import React from "react";
import BookingStatus from "./bookingStatus";
import TransactionChart from "./chart";
import ItemsData from "./itemsData";
import TopValueTransaction from "./topValueTransaction";

const DashboardPage = () => {
  return (
    <>
      <ItemsData />
      <TransactionChart />
      <BookingStatus />
      <TopValueTransaction />
    </>
  );
};

export default DashboardPage;
