import "./App.css";
import logo from "../src/assets/fintechracy.svg";
import codeBare from "../src/assets/codeBare.png";
import search from "../src/assets/search.svg";
import closebare from "../src/assets/closebare.svg";
import filter from "../src/assets/filter.svg";
import { motion } from "framer-motion";
import arrow from "../src/assets/rightArrow.svg";
import congrats from "../src/assets/congrats.svg";
import { info } from "./components/receipts/info";
import Nav from "./components/navigation/Nav";
import receipts from "./assets/receipts1.png";
import { useEffect, useState } from "react";
import Code from "./components/codebar/Code";
import Receipt from "./components/codebar/Receipts";
function App() {
  const [isActive, setIsActive] = useState(null);
  const [isActive1, setIsActive1] = useState(null);
  const [isActiveCode, setIsActiveCode] = useState(false);
  const [isActiveReceipts, setIsActiveReceipts] = useState(false);
  const [newItem, setNewItem] = useState(true);
  return (
    <div className=" h-screen w-screen flex items-center justify-center relative">
      {newItem === true && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: "1.5s", stiffness: 120, type: "spring" }}
          className="absolute inset-0 z-[1] "
        >
          <div className="absolute top-[100px] left-[50px] z-[3]  h-[322px] w-[224px] flex  items-center justify-evenly bg-white rounded-[5px]">
            <div className="absolute left-[191px] top-[13px]  ">
              <img
                src={closebare}
                alt="close"
                onClick={() => {
                  setNewItem(false), setIsActive1(0);
                }}
              />
            </div>
            <div className="h-[80%] w-full flex flex-col items-center justify-between">
              <div className="h-[115px] w-[120px] rounded-[5px] overflow-hidden">
                <img src={congrats} alt="close" className="h-full w-full" />
              </div>
              <h1 className="text-center text-Inter w-[133px] h-[40px] text-[12px] font-[600] ">
                There's a fresh receipt in your inbox!
              </h1>
              <button className="h-[41px] text-Inter rounded-[5px] w-[201px] bg-[#594EF1] flex items-center justify-center text-center text-white">
                Check it
              </button>

              <h1 className="h-[13px] text-Inter w-[82px] text-[#C4C4C4] text-center text-[10px] font-[500]">
                Remind me later
              </h1>
            </div>
          </div>
        </motion.div>
      )}
      {isActiveCode && (
        <Code
          isActiveCode={isActiveCode}
          setIsActive={setIsActive}
          setIsActiveCode={setIsActiveCode}
        />
      )}
      {isActiveReceipts && (
        <Receipt
          isActiveReceipts={isActiveReceipts}
          setIsActiveReceipts={setIsActiveReceipts}
        />
      )}
      <motion.div
        className={`${
          newItem === true ? " brightness-[0.5] bg-[#00000070] " : " bg-white"
        } h-full w-full  flex flex-col items-center justify-between`}
      >
        <motion.div
          inital={{ y: "-50px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: "1.5s", stiffness: 120, type: "spring" }}
          className=" w-full flex px-3 items-center justify-between"
        >
          <img src={logo} alt="logo" />
          <img src={codeBare} alt="codebare" />
        </motion.div>
        <motion.h1
          inital={{ x: "-50px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: "1.5s" }}
          className=" font-[700] px-3 font-Inter w-full text-[17px]"
        >
          Welcome To <span className=" text-[#594EF1]">FTR Client</span>
        </motion.h1>
        <motion.h3
          inital={{ x: "-50px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: "1.5s" }}
          className=" text-[#9E9E9E] px-3 w-full font-[700] font-Inter text-[10px]"
        >
          Let Store Owners Scan Your Barcode
        </motion.h3>
        <motion.div
          inital={{ x: "-50px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: "1.5s" }}
          className="flex h-[45px] px-3 items-center w-full"
        >
          <div className="flex h-full items-center justify-between  w-[100%]">
            <div className="w-[80%] h-full flex items-center justify-center bg-red-500 rounded-[5px] overflow-hidden relative">
              <img src={search} alt="search" className="absolute left-[15px]" />
              <input
                type="text"
                placeholder="Search for receipt here"
                className=" indent-[48px] h-full w-full border-0 outline-0 bg-[#f8f8f8] text-[9px] "
              />
            </div>
            <div className="w-[15%] h-full rounded-[5px] flex items-center justify-center bg-blue-500">
              <img src={filter} alt="filter" />
            </div>
          </div>
        </motion.div>
        <div className="flex  items-center px-3 justify-between w-full">
          <motion.h1
            inital={{ x: "-50px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: "1.5s" }}
            className="text-[13px] font-[600] font-Inter"
          >
            My Receipts
          </motion.h1>
          <motion.h1
            inital={{ x: "50px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: "1.5s" }}
            className="flex items-center justify-center font-[600] text-[9px] font-Inter"
          >
            See all{" "}
            <span className="ms-2 h-[6px] w-[3px]">
              {" "}
              <img src={arrow} alt="arrow" className="h-full w-full" />{" "}
            </span>
          </motion.h1>
        </div>
        <ul className="flex flex-col items-center px-3 justify-between w-full  ">
          {isActive !== null ? (
            <div
              inital={{ scale: 0, opacity: 0 }}
              animate={{ scale: 0, opacity: 1 }}
              transition={{ duration: "1.5s" }}
              className="w-full flex-col"
            >
              <li
                className={`flex items-center w-full h-[52px] font-Inter justify-between  p-2 border-[2px]  rounded-[5px] border-[#F8F8F8] `}
              >
                <h1 className="flex text-[11px] flex-col font-[600] w-[50%] h-full justify-evenly">
                  {info[isActive].name}
                  <span className="text-[#B4B4B4] text-[9px] ">
                    {" "}
                    {info[isActive].date} at {info[isActive].time}{" "}
                  </span>
                </h1>
                <h1 className="flex flex-col text-[9px] font-[600] w-[35%] items-center h-full  justify-evenly">
                  {info[isActive].price}.00
                  <span className="text-[#B4B4B4]">
                    {info[isActive].quantity} items
                  </span>
                </h1>
                <div className="flex items-center justify-center w-[15px] h-[15px] bg-[#fafafa] p-[1px] ">
                  <img
                    src={info[isActive].logo}
                    alt="logo"
                    className="h-full w-full"
                  />
                </div>
              </li>

              <li
                className={`flex items-center w-full flex-col justify-between border-[2px] my-2  rounded-[5px] border-[#F8F8F8] `}
              >
                <div
                  className={`flex items-center w-full h-[52px] font-Inter justify-between m-2 p-2  `}
                >
                  <h1 className="flex text-[11px] flex-col font-[600] w-[50%] h-full justify-evenly">
                    {info[isActive].name}
                    <span className="text-[#B4B4B4] text-[9px] ">
                      {" "}
                      choco.land@gmail.com
                    </span>
                  </h1>

                  <button className="bg-green-500 rounded-[4px] text-white flex  text-[9px] font-[600] h-[20px] w-[57px] items-center justify-center">
                    Paid
                  </button>
                </div>
                <div
                  className="w-[254px] h-[254px]"
                  onClick={() => setIsActiveReceipts(true)}
                >
                  <img
                    src={receipts}
                    alt={receipts}
                    className="w-full h-full"
                  />
                </div>
              </li>
            </div>
          ) : (
            info.map((data, i) => {
              return (
                <motion.li
                  inital={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: "1.5s",
                    stiffness: 120,
                    type: "spring",
                  }}
                  className={`flex items-center w-full h-[52px] font-Inter justify-between m-2 p-2 border-[2px]  ${
                    isActive1 === i
                      ? " border-[#594ef1] shadow-3xl "
                      : " border-[#F8F8F8]  "
                  }  rounded-[5px]`}
                  onClick={() => setIsActive1(i)}
                >
                  <h1 className="flex text-[11px] flex-col font-[600] w-[50%] h-full justify-evenly">
                    {data.name}
                    <span className="text-[#B4B4B4] text-[9px] ">
                      {" "}
                      {data.date} at {data.time}{" "}
                    </span>
                  </h1>
                  <h1 className="flex flex-col text-[9px] font-[600] w-[35%] items-center h-full  justify-evenly">
                    {data.price}.00
                    <span className="text-[#B4B4B4]">
                      {data.quantity} items
                    </span>
                  </h1>
                  <div
                    className="flex items-center justify-center w-[15px] h-[15px] bg-[#fafafa] p-[1px] "
                    onClick={() => {
                      setIsActiveCode(true);
                      setIsActive(data.id);
                    }}
                  >
                    <img src={data.logo} alt="logo" className="h-full w-full" />
                  </div>
                </motion.li>
              );
            })
          )}
        </ul>
        <Nav
          newItem={newItem}
          setNewItem={setNewItem}
          setIsActive={setIsActive}
        />
      </motion.div>
    </div>
  );
}

export default App;
