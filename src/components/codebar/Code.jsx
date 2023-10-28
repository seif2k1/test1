import close from "../../assets/close.svg";
import phone from "../../assets/phone.svg";
import codeBare from "../../assets/codebare1.svg";
import { motion } from "framer-motion";
import "./code.css";

const Code = ({ setIsActiveCode, setIsActive }) => {
  return (
    <div className="absolute inset-0 z-[3]  bg-black flex items-center justify-center">
      <motion.div
        className="absolute h-[16.45px] w-[16.48px] top-[21.76px] left-[282.77px]"
        onClick={() => {
          setIsActiveCode(false), setIsActive(null);
        }}
      >
        <img src={close} alt="close" className="h-full w-full " />
      </motion.div>
      <div className="h-screen w-screen flex items-center justify-center">
        <motion.div
          className="h-[80%] w-[80%] flex items-center justify-between flex-col"
        >
          <div className="h-[20%] w-full flex items-center justify-center relative">
            <img src={phone} alt="close" className=" phone " />
          </div>
          <div className="h-auto w-full ">
            <img
              src={codeBare}
              onClick={() => setIsActiveCode(false)}
              alt="close"
              className="h-full w-full"
            />
          </div>
          <div className=" w-full  flex items-center justify-center">
            <h1 className=" text-[10px] text-white h-[32px] w-[196px] text-center">
              Let Store Owners Scan Your Barcode to get your receipts
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Code;
