import React, { useEffect, useState } from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Data, dataOffice, dataMeetings } from "utils/dummy";
import BarChart from "../../Chart/lineChart";
import DoughnutChart from "components/Chart/doughnutChart";
import { useDispatch, useSelector } from "react-redux";
import { fetchOffice } from "store/Feature/FeatureOffice/officeSlice";

const TransactionChart = () => {
  const dispatch = useDispatch();
  const listOfOffice = useSelector((state) => state.office.data);
  const [officeList, setOfficeList] = useState();
  const [coworkCount, setCoworkCount] = useState(1);
  const [meetingCount, setMeetingCount] = useState(1);
  const [officeCount, setOfficeCount] = useState(1);

  useEffect(() => {
    dispatch(fetchOffice())
      .then((res) => {
        setOfficeList(res.payload);
        const updatedCoworkList = [];
        const updateMeetingList = [];
        const updatedOfficeList = [];
        listOfOffice.forEach((office) => {
          const loweredOfficeType = office.office_type.toLowerCase();
          if (
            loweredOfficeType.includes("coworking space")
          ) {
            updatedCoworkList.push(office);
          } else if (
            loweredOfficeType.includes("meeting room")
          ) {
            updateMeetingList.push(office);
          } else if (
            loweredOfficeType.includes("office")
          ) {
            updatedOfficeList.push(office);
          }
        });
        setCoworkCount(updatedCoworkList?.length);
        setMeetingCount(updateMeetingList?.length);
        setOfficeCount(updatedOfficeList?.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);


  const [pie, setPie] = useState({
    labels: ["Cooworking Space", "Meeting Room", "Office Building"],
    datasets: [
      {
        data: [coworkCount, meetingCount, officeCount],
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
  // console.log(coworkCount)
  return (
    <>
      <section className="flex gap-4 mt-10">
        <div className="w-1/2 bg-white rounded-xl drop-shadow-4xl">
          <div className="p-8">
            <h2 className="font-bold text-2xl text-left pt-2">Transaction Chart</h2>
            <hr className="w-full border-t-white border-l-white border-r-white border-2 my-2 border-b-gray-100 " />
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
        <div className="w-1/2 bg-white rounded-xl drop-shadow-4xl">
          <div className="p-8 pt-5">
            <h3 className="text-left font-bold text-2xl pt-4">Total Office</h3>
            <hr className="w-full border-t-white border-l-white border-r-white border-2 my-3 border-b-gray-100 " />
            <div className="flex px-24 justify-center">
              <DoughnutChart chartData={pie} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransactionChart;
