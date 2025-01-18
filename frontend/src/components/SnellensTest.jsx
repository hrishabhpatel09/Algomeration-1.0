import React, { useState } from "react";
import { motion } from "motion/react";
import { useDispatch } from "react-redux";
import {setSnellensTestActive,setAstigmatismTestActive, setSnellScore} from "../redux/general.slice.js";

const SnellensTest = ({ isActive, setIsActive }) => {
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (idx) => {
    setActiveIndex(idx);
    dispatch(setSnellScore(idx + 1));
    dispatch(setSnellensTestActive(false));
    dispatch(setAstigmatismTestActive(true));
  };

  return (
    <motion.div className="grid grid-cols-6" exit={{x: -20000}} initial={{x: 1000}} animate={{x: 0}}>
      <motion.img
        src="/Snellens.png"
        alt=""
        className="col-start-2 col-span-2"
        style={{}}
      />
      <div className="grid h-[90%] grid-rows-11 col-start-4 col-span-3 px-20 pt-10 gap-2 cursor-pointer">
      <h1 className="text-3xl font-semibold text-gray-800 text-center">
          Select the Lowest Line You Can Read
        </h1>
        <p className="text-gray-500 text-center">
          Click on the line number corresponding to the smallest text you can see clearly.
        </p>
        {Array.from({ length: 11 }, (_, i) => (
          <div
            key={i}
            className={`ml-20 row-span-1 flex h-16 justify-center items-center w-[70%] rounded-md transition-all duration-200 
            ${
              activeIndex === i
                ? "bg-[#117d66] text-white"
                : "bg-slate-100 hover:bg-[#117d66] hover:text-white"
            }`}
            onClick={() => {
              handleClick(i);
            }}
          >
            Line {i + 1}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SnellensTest;
