import React from 'react'
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineTags } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";

function Menu() {
  const [showSidebar, setShowSidebar] = React.useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div>
      <button

        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500  bg-black rounded-2xl sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        onClick={handleToggleSidebar}
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className={`fixed top-3  lg:left-4 z-40 w-64 h-[95%] transition-transform ${showSidebar ? "" : "-translate-x-full"
          } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div
          className="h-full px-3 py-4 rounded-2xl overflow-y-auto bg-black"
          onClick={handleToggleSidebar}
        >
          <div className="p-5 flex justify-start">
            <span className="text-white font-bold text-3xl ">Intellipaat</span>
          </div>
          <ul className="space-y-3 font-medium pl-4 flex-grow">
            <li>
              <div className="flex items-center p-2 text-gray-900   rounded-2xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <AiOutlinePieChart /> <span className="ml-3">Dashboard</span>
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 text-gray-900   rounded-2xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <AiOutlineTags /> <span className="ml-3">Transaction</span>
              </div>
            </li>
            <li>
              <li>
                <div className="flex items-center p-2 text-gray-900   rounded-2xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TbCalendarTime />
                  <span className="ml-3">Schedule</span>
                </div>
              </li>
              <div className="flex items-center p-2 text-gray-900   rounded-2xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <HiOutlineUserCircle /> <span className="ml-3">Users</span>
              </div>
            </li>
            <li>
              <div className="flex items-center p-2 text-gray-900   rounded-2xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IoSettingsOutline /> <span className="ml-3">Settings</span>
              </div>
            </li>
          </ul>
          <div className="text-white  p-7 text-left  grid mt-[30vh]">
            <span>Help</span>
            <span>Contact us</span>
          </div>
        </div>
      </aside></div>
  )
}

export default Menu