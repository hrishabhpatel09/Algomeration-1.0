import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PopUp = ({ isOpen, onClose }) => {
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
            className="relative text-white p-4 h-[36vh] w-[70vw] rounded-md bg-[#5c7088] flex items-center"
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
            <div>
                <h4 className='text-2xl'>INSTRUCTIONS</h4>
                <ul className='list-disc pl-6 text-xl'>
                    <li>Ensure proper room lighting and set phone brightness to 100%.</li>
                    <li>Hold the screen 4 feet (1.2 m) from the patient (approximately the end of a standard hospital bed if patient is sitting upright).</li>
                    <li>Test each eye independently. The patient should completely cover the opposite eye.</li>
                    <li>See Pearls/Pitfalls for further instructions.</li>
                </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopUp;
