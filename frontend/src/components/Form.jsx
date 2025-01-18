import React, { useState } from 'react';
import { motion,AnimatePresence } from 'motion/react';
import { useSelector } from 'react-redux';
import axios from "axios"

const Form = () => {
  const {snellScore,astigmatismScore,blurScore} =  useSelector((state) => state.general);
  const [isOpen,setIsOpen] = useState(false);
  const [score,setScore] = useState(0);

  console.log(snellScore,astigmatismScore,blurScore);
  const [formData, setFormData] = useState({
    age: '',
    sportsHours: '',
    screenTime: '',
    studyHours: '',
    eyeDisease: '',
    sleepQuality: '',
    chronicDiseases: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const body = {
      age: formData.age,
      sportshr: formData.sportsHours,
      screentime: formData.screenTime,
      studyHr: formData.studyHours,
      genetics: formData.eyeDisease === "Yes" ? 1 : 0,
      sleepQualityScore: formData.sleepQuality,
      presenceofChronicdiseaseinParents: formData.chronicDiseases === "Yes" ? 1 : 0,
      snellScore: snellScore,
      astScore: astigmatismScore,
      blurScore: blurScore,
    };
  
    try {
      const res = await axios.post(
        "http://127.0.0.1:5000/test",
        body,
        {
          headers: {
            "Content-Type": "application/json", // Ensures the backend knows the body is JSON
          },
          withCredentials: true,
          withXSRFToken: true // Send credentials if needed (cookies, sessions)
        }
      );
      setScore(res.data.score);
      setIsOpen(true);
      console.log("Response:", res.data);  // Handle the response data
    } catch (err) {
      console.error("Error during API call:", err);
      // Optionally handle the error (e.g., show a user-friendly message)
    }
  };
  

  return (
    <>
    <PopUp isOpen={isOpen} onClose={()=>setIsOpen(false)} score={score}/>
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: +1000 }}
      className="grid grid-cols-2 h-screen bg-gray-100"
    >
      <div
  style={{
    backgroundImage: "url('https://img.freepik.com/premium-photo/young-cheerful-laughing-woman-having-fun-making-binoculars-using-her-hands-isolated-gray-space_274222-2715.jpg?uid=R178112347&ga=GA1.1.910196149.1733582593&semt=ais_hybrid')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  className="col-span-1"
/>
      <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white h-full shadow-md rounded-lg p-8 pt-20 px-16 w-full space-y-6"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Health Information Form
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Age */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="age"
              >
                Age (in numbers)
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your age"
                required
              />
            </div>

            {/* Sports Hours */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="sportsHours"
              >
                Sports Hours Per Week
              </label>
              <input
                type="number"
                id="sportsHours"
                name="sportsHours"
                value={formData.sportsHours}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter hours"
                required
              />
            </div>

            {/* Screen Time */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="screenTime"
              >
                Screen Time Per Week
              </label>
              <input
                type="number"
                id="screenTime"
                name="screenTime"
                value={formData.screenTime}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter hours"
                required
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Study Hours */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="studyHours"
              >
                Study Hours Per Week
              </label>
              <input
                type="number"
                id="studyHours"
                name="studyHours"
                value={formData.studyHours}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter hours"
                required
              />
            </div>

            {/* Eye Disease */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Do your parents have any eye-related disease?
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="eyeDisease"
                    value="Yes"
                    onChange={handleChange}
                    className="text-teal-500"
                    required
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="eyeDisease"
                    value="No"
                    onChange={handleChange}
                    className="text-teal-500"
                  />
                  No
                </label>
              </div>
            </div>

            {/* Sleep Quality */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Sleep Quality (1-Poor, 2-Fair, 3-Good, 4-Excellent)
              </label>
              <select
                name="sleepQuality"
                value={formData.sleepQuality}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              >
                <option value="">Select Quality</option>
                <option value="1">1 - Poor</option>
                <option value="2">2 - Fair</option>
                <option value="3">3 - Good</option>
                <option value="4">4 - Excellent</option>
              </select>
            </div>

            {/* Chronic Diseases */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Presence of chronic diseases (e.g., Diabetes, Hypertension)
              </label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="chronicDiseases"
                    value="Yes"
                    onChange={handleChange}
                    className="text-teal-500"
                    required
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="chronicDiseases"
                    value="No"
                    onChange={handleChange}
                    className="text-teal-500"
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-all duration-200"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      </div>
    </motion.div>
    </>
  );
};

const getColor = (score) => {
  if(score < 20) return 'bg-green-500';
  if(score < 40) return 'bg-yellow-500 text-black';
  if(score < 60) return 'bg-red-500';
  if(score < 80) return 'bg-red-600';
  return 'bg-red-700';
}

const PopUp = ({ isOpen, onClose,score }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={`relative text-white p-4 h-[10vh] w-[70vw] rounded-md ${getColor((score.toFixed(4))*100)}  flex items-center`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
          >
            <button
              className="absolute top-4 right-4 text-white bg-red-600 px-2 py-1 rounded"
              onClick={onClose}
            >
              Close
            </button>
            <div className='flex justify-center items-center w-full'>
                <h2 className={`text-3xl text-center`}>
                {`Risk for Myopia is ${(score.toFixed(4))*100} %`}
                </h2>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Form;
