import React from "react";
import { MdOutlineRefresh } from "react-icons/md";


import { CiSearch } from "react-icons/ci";
import { BiBell } from "react-icons/bi";
import { BiHappyAlt } from "react-icons/bi";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineTags } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";
import { BsTags, BsWallet2 } from "react-icons/bs";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import { useState } from "react";
import TopProductsCard from "./TopProductCArd";
import axios from 'axios';
import Menu from "./Menu";

function Dashboard() {
  const [chart, setChart] = useState(null);
  const [linechart, setLineChart] = useState(null);
  const [month, setMonth] = useState("January");
  const [studentData, setstudentData] = useState([]);
  const [cardData, setcardData] = useState({});
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 100,
          },
        },
      ],
    },
  };

  useEffect(() => {
    // data for the line chart
    const apiUrl = "http://localhost:8000/alldata";

    // Make a GET request using Axios

    let newChart
    axios.get(apiUrl)
      .then((response) => {
        // Handle the data here
        setstudentData(response.data.table)
        setcardData(response.data.cardData)
        setChart(response.data.pieChart)
        const ctx = document.getElementById("activities-chart").getContext("2d");
        newChart = new Chart(ctx, {
          type: "line",
          data: response.data.lineGraphData,
          options: options,
        }, [options]);
        setLineChart(newChart)
        // setChart(newChart);

        // cleanup function to destroy the chart when the component unmounts
        return () => {
          newChart.destroy();
        };
        
      })
      .catch((error) => {
        // Handle errors here
        console.error("Axios error:", error);
      });

    // const data = {
    //   labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    //   datasets: [
    //     {
    //       label: "Guests",
    //       data: [100, 200, 100, 400],
    //       fill: false,
    //       borderColor: "#FF6384",
    //       tension: 0.1,
    //     },
    //     {
    //       label: "Users",
    //       data: [200, 500, 400, 500],
    //       fill: false,
    //       borderColor: "#36A2EB",
    //       tension: 0.1,
    //     },
    //   ],
    // };

    // options for the line chart


    // create the chart


    // set the chart state

  }, []);




  const refresh = () => {
    const apiUrl = "http://localhost:8000/lineGraph";

    let newChart
    linechart.destroy();
    axios.get(apiUrl)
      .then((response) => {
        // Handle the data here

        const ctx = document.getElementById("activities-chart").getContext("2d");
        newChart = new Chart(ctx, {
          type: "line",
          data: response.data.lineGraphData,
          options: options,
        });
        setLineChart(newChart)
        // setChart(newChart);

        // cleanup function to destroy the chart when the component unmounts
        return () => {
          newChart.destroy();
        };
      })
      .catch((error) => {
        // Handle errors here
        console.error("Axios error:", error);
      });

  }

  return (
    <div className="bg-blue-300 h-100%  ">


      <div>
        <Menu />
      </div>


      <div className="lg:pl-28 sm:pl-4  pr-7 sm:ml-64 ">
        <div className="p-2 lg:w-[90%] align-center ">
          <div className="grid lg:grid-cols-2 lg:p-2 lg:gap-5  ">
            <div className=" grid justify-items-start	">
              <span className="font-bold	">Dashboard</span>
            </div>

            <div className=" grid justify-items-end mb-1 	">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search"
                  className=" rounded-l-lg p-2  h-[2rem] "
                />

                <div className="flex items-center justify-center h-[2rem] w-[2rem]  rounded-r-lg bg-white">
                  <CiSearch> </CiSearch>
                </div>
                <div className="p-2 pl-4">
                  {" "}
                  <BiBell />
                </div>

                <div className="p-2 pl-4">
                  <BiHappyAlt />
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 sm:grid-cols-2 sm:gris-rows-2 gap-x-8 gap-y-4 mb-3">
            <div className="flex  h-32   rounded-2xl bg-green-100">
              <div className="relative p-3 w-[100%] ">
                <div className="p-5">
                  <BsWallet2 className="absolute right-5 top-4 " />
                  <div className="absolute bottom-4 text-left ">
                    <p>Total Revenues</p>
                    <p className="font-bold text-3xl sm:text-2xl ">{cardData.totalRevenue}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  h-32  rounded-2xl bg-orange-100">
              <div className="relative p-3 w-[100%] ">
                <div className="p-5">
                  <BsTags className="absolute right-5  top-4 " />
                  <div className="absolute bottom-4 text-left ">
                    <p>Total Transactions</p>
                    <p className="font-bold text-3xl sm:text-2xl ">{cardData.yourTransections}</p>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="flex h-32  rounded-2xl bg-red-100">
              <div className="relative p-3 w-[100%] ">
                <div className="p-5">
                  <FaRegThumbsUp className="absolute right-5 top-4 " />
                  <div className="absolute bottom-4 text-left ">
                    <p>Total Likes</p>
                    <p className="font-bold text-3xl sm:text-2xl ">{cardData.totalLikes}</p>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="flex  h-32  rounded-2xl bg-indigo-100">
              <div className="relative p-3 w-[100%] ">
                <div className="p-5">
                  <AiOutlineUsergroupDelete className="absolute right-5 top-4 " />
                  <div className="absolute bottom-4 text-left ">
                    <p>Total Users</p>
                    <p className="font-bold text-3xl sm:text-2xl ">{cardData.totalUser}</p>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>



          <div className="flex flex-wrap justify-center  " >
            <div className="flex p-3  h-72 mb-4 border border-black w-[100%] lg:w-[49%]  rounded-2xl bg-white">
              <div
                className="activities-card card "
                style={{ height: "15rem", width: "100%" }} >
                <div
                  className="activities-card-header"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="font-bold 	  ">Activities</div>
                  <div className="flex flex-wrap" style={{ display: "flex", alignItems: "center" }}>
                    <div className="flex  flex-wrap justify-end" >
                      <button onClick={() => { refresh() }}><MdOutlineRefresh />
                      </button>


                    </div>
                  </div>
                </div>
                <canvas className="h-10 " id="activities-chart" />
              </div>
              <div>

              </div>
            </div>
            {studentData.length &&
              <div className="w-[100%] h-72 mb-2 lg:w-[49%] p-2 scroll-smooth  scrollbar-track-blue-100 scrollbar-thumb-blue-200  scrollbar-rounded-[1rem] scrollbar-rounded-xl 	scrollbar-thin  overflow-x-hidden  m-1 border border-black rounded-xl  bg-white " >
                {studentData.map((students) => {
                  return <tr >
                    <td className=" ">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 m-3 sm:mr-3">
                          <img className="rounded-full" src={students.img} width="40" height="40" alt="Alex Shatov" /></div>
                        <div className="font-medium text-gray-800">{students.name}</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{students.name}@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center justify-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img className="rounded-full" src={students.text} width="40" height="40" alt="Alex Shatov" /></div>
                      </div>
                    </td>

                  </tr>
                })
                }


              </div>
            }

          </div>




          <div className="grid lg:grid-cols-2 gap-3 ">
            <div className="flex items-center justify-center  rounded-2xl bg-white h-48 ">
              {chart && <TopProductsCard charts={chart} />}
            </div>

            <div className="flex  rounded-2xl  bg-white h-48 p-5">
              <div ClassName=" sm:p-6 lg:p-3">
                <div ClassName="sm:flex inline-block h-9 sm:justify-between">
                  <div>
                    <h3 ClassName="lg:text-lg sm:text-sm font-bold  text-gray-900">
                      Today's Schedule
                    </h3>
                  </div>


                </div>

                <ul className="space-y-2">
                  <li>
                    <div

                      className="block text-left h-full border-l-4 border-green-300 "
                    >
                      <span className="font-medium text-sm ml-2  text-slate-800">

                        Meeting with suppliers from Kuta Bali
                      </span>

                      <p className=" text-xs font-medium ml-2 text-gray-300">
                        14:00-15.00
                        <br />
                        at Sunset Road, Kuta Bali
                      </p>
                    </div>
                  </li>

                  <li>
                    <div

                      className="block text-left h-full border-l-4 border-blue-300 "
                    >
                      <span className="font-medium text-sm ml-2  text-slate-800">

                        Check operation at Giga Factory 1
                      </span>

                      <p className=" text-xs font-medium ml-2 text-gray-300">
                        18:00-20.00
                        <br />
                        at Central jakarta
                      </p>
                    </div>
                  </li>


                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
