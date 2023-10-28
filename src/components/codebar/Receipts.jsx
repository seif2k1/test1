import close from "../../assets/close.svg";
import phone from "../../assets/phone.svg";
import codeBare from "../../assets/codebare1.svg";
import receipts from "../../assets/receipts1.png";
import { motion } from "framer-motion";
const Receipt = ({ setIsActiveReceipts, isActiveReceipts }) => {
  return (
    <div className="absolute inset-0 z-[3]  bg-black flex items-center justify-center">
      <motion.div
        className="absolute h-[16.45px] w-[16.48px] top-[21.76px] left-[282.77px] "
        onClick={() => setIsActiveReceipts(false)}
      >
        <img src={close} alt="close" className="h-full w-full" />
      </motion.div>
      <motion.div className="h-screen w-screen flex items-center justify-center">
        <div className="h-[387px] w-[291px] flex items-center justify-center">
          <img src={receipts} alt="close" className="h-full w-full" />
        </div>
      </motion.div>
    </div>
  );
};

export default Receipt;
