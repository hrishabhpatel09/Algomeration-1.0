import React from 'react';
import { motion } from "motion/react";
import { useDispatch } from 'react-redux';
import { setBlurTestActive, setFormActive, setBlurScore} from '../redux/general.slice';

const BlurTest = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const dispatch = useDispatch();

  const handleClick = (index) => {
    setActiveIndex(index);
    dispatch(setBlurTestActive(false));
    dispatch(setBlurScore(index + 1));
    dispatch(setFormActive(true))
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 h-screen"
      initial={{ x: +1000 }}
      animate={{ x: 0 }}
    >
      {/* Left Section: Image */}
      <div className="flex justify-center items-center p-4">
        <img
          src="./Blur.jpg"
          alt="Blur Test"
          className="max-w-full max-h-[80%] rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section: Text and Options */}
      <div className="flex flex-col justify-center items-center border-l-2 border-neutral-200 p-6 space-y-6">
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-gray-800 text-center">
          Select the Lowest Line You Can Read
        </h1>
        <p className="text-gray-500 text-center">
          Click on the line number corresponding to the smallest text you can see clearly.
        </p>

        {/* Options */}
        <div className="grid grid-cols-1 w-full max-w-sm gap-4">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className={`flex justify-center items-center h-12 rounded-md text-lg font-medium cursor-pointer transition-all duration-200
                ${
                  activeIndex === i
                    ? "bg-[#117d66] text-white shadow-lg"
                    : "bg-slate-100 hover:bg-[#117d66] hover:text-white"
                }`}
              onClick={() => handleClick(i)}
            >
              Line {i + 1}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BlurTest;
