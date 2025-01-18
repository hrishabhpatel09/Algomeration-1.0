import React from 'react'
import {motion} from "motion/react"
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const HomePage = () => {
   const navigate = useNavigate()
   const handleClick = () => {
    navigate('/test');
   }
  return (
    <>
        <div className='h-full'>
      <div className='flex flex-col gap-20 items-center h-[40%]'>
        <motion.h1
           initial={{y: -500}}
           animate={{y: 50}}
           className='text-6xl text-wrap font-bold w-[55%] text-center'
        >
            Protect Your Vision with Advanced Eye Care Technology
        </motion.h1>
        <motion.p className='text-neutral-400 text-2xl w-[50%] text-center' 
          initial={{y: -500}} 
          animate={{y:0, transition:{duration: 0.5}}}>
        Take our comprehensive vision assessment to understand your risk of myopia and receive personalized recommendations for maintaining healthy eyesight.
        </motion.p>
        <div className='h-24 flex items-center pr-4 bg-blue-500 rounded-md hover:bg-blue-600'>
            <button className='h-16 bg-blue-500 px-4 text-2xl text-white rounded-md' onClick={handleClick}>
                Start Free Assessment
            </button>
            <FaArrowRightLong className='text-white ml-4'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage
