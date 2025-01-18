import React, { useState } from "react";
import { motion } from "motion/react";

const SnellensTest = ({ isActive, setIsActive }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleClick = (idx) => {
    setActiveIndex(idx);
    setIsActive(!isActive);
  };

  return (
    <motion.div className="grid grid-cols-6" exit={{x: -20000}} initial={{x: 1000}} animate={{x: 0}}>
      <motion.img
        src="/Snellens.png"
        alt=""
        className="col-start-2 col-span-2"
        style={{}}
      />
      <div className="grid h-[50%] grid-rows-11 col-start-4 col-span-3 px-20 pt-10 gap-2 cursor-pointer">
        {Array.from({ length: 11 }, (_, i) => (
          <div
            key={i}
            className={`row-span-1 flex h-full justify-center items-center w-[70%] rounded-md transition-all duration-200 
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
