import React, { useState } from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Data, dataOffice, dataMeetings } from "utils/dummy";
import BarChart from "../../Chart/lineChart";
import DoughnutChart from "components/Chart/doughnutChart";

const TransactionChart = () => {
  const [pie, setPie] = useState({
    labels: ["Cooworking", "Meeting Room", "Office Building"],
    datasets: [
      {
        data: [43, 26, 31],
        backgroundColor: ["#D4647A", "#1DBFC1", "#6E6FDC"],
        cutout: "80%",
        borderWidth: 0,
      },
    ],
  });
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.day),
    datasets: [
      {
        label: "Office Building ",
        data: Data.map((data) => data.userGain),
        fill: false,
        borderColor: "#6E6FDC",
        backgroundColor: "#6E6FDC",
        tension: 0.6,
        borderWidth: 1,
      },
      {
        label: "Coworking ",
        data: dataOffice.map((data) => data.userGain),
        fill: false,
        borderColor: "#D4647A",
        backgroundColor: "#D4647A",
        tension: 0.6,
        borderWidth: 1,
      },
      {
        label: "Meeting Room ",
        data: dataMeetings.map((data) => data.userGain),
        fill: false,
        borderColor: "#1DBFC1",
        backgroundColor: "#1DBFC1",
        tension: 0.6,
        borderWidth: 1,
      },
    ],
  });
  return (
    <>
      <section className="flex gap-4 mt-10">
        <div className="w-1/2 bg-white rounded-xl shadow-card">
          <div className="p-4">
            <h2 className="font-bold text-2xl text-left">Transaction Chart</h2>
            <div className="flex justify-between py-5">
              <div className="flex flex-wrap justify-center items-center ">
                <DateRangeIcon className="text-blue-800" />
                <h3 className="text-sm font-medium pl-2">{`12 - 18 Desember 2022`}</h3>
              </div>
              <div className="flex flex-wrap gap-1">
                <button className="p-1 px-2 bg-[#D4D9ED] border-2 border-blue-700 text-[#2943A3] rounded-full text-sm">
                  Weakly
                </button>
                <button className="p-1 px-2 bg-[#FCFCFC] border-2 border-[#808080] text-[#808080] rounded-full text-sm">
                  Monthly
                </button>
                <button className="p-1 px-2 bg-[#FCFCFC] border-2 border-[#808080] text-[#808080] rounded-full text-sm">
                  Yearly
                </button>
              </div>
            </div>
            <BarChart chartData={chartData} />
          </div>
        </div>
        <div className="w-1/2 bg-white rounded-xl shadow-card">
          <div className="p-4 pt-12">
            <h3 className="text-left font-bold text-xl">Total Office</h3>
            <DoughnutChart chartData={pie} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TransactionChart;