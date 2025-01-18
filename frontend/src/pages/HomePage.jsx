import React from 'react'
import {motion} from "motion/react"
import { FaArrowRightLong } from "react-icons/fa6";
import { Eye, ArrowRight, RotateCcw, Save, Activity, Shield, Clock, Brain } from 'lucide-react';
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


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-36">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quick & Easy</h3>
                <p className="text-gray-600">
                  Complete your comprehensive vision assessment in just 5-10 minutes from any device.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Smart Analysis</h3>
                <p className="text-gray-600">
                  Advanced algorithms analyze your vision test results and lifestyle factors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Personalized Care</h3>
                <p className="text-gray-600">
                  Receive tailored recommendations based on your unique vision profile.
                </p>
              </div>
            </div>
    </div>
    </>
  )
}

export default HomePage
