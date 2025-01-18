import React, { useState } from 'react';
import gridImage from "/Grid.jpg";
import { motion } from "motion/react";
import { useDispatch } from "react-redux";
import {setAstigmatismTestActive,setBlurTestActive} from "../redux/general.slice.js";

const Astigmatism = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const dispatch = useDispatch();

  const handleNoClick = () =>{
    setSelectedOption("NO");
    dispatch(setAstigmatismTestActive(false));
    dispatch(setBlurTestActive(true));
  }
  const handleYesClick = () =>{
    setSelectedOption("YES")
    dispatch(setAstigmatismTestActive(false));
    dispatch(setBlurTestActive(true));
  }
  return (
    <motion.div
      className="flex justify-between h-[100vh]"
      initial={{ x: +1000 }}
      animate={{ x: 0 }}
    >
      <div className="pt-4 pl-10">
        <img src={gridImage} alt="gridImage" />
      </div>
      <div className="w-[50%] px-20 border-l-neutral-200 border-2">
        <div className="flex flex-col justify-center items-center h-[30vh]">
          <h2 className="text-2xl">
            Do you notice any distortion / blurry / blindspot in the grid?
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className={`shadow-md h-20 rounded-md text-center flex items-center justify-center cursor-pointer ${
              selectedOption === "YES"
                ? "bg-[#117d66] text-white"
                : "hover:bg-[#117d66] hover:text-white"
            }`}
            onClick={handleYesClick}
          >
            YES
          </div>
          <div
            className={`shadow-md h-20 rounded-md text-center flex items-center justify-center cursor-pointer ${
              selectedOption === "NO"
                ? "bg-[#117d66] text-white"
                : "hover:bg-[#117d66] hover:text-white"
            }`}
            onClick={handleNoClick}
          >
            NO
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Astigmatism;
