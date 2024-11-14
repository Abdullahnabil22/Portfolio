"use client";

import { motion } from "framer-motion";
import { PiCoinsBold } from "react-icons/pi";
import { GiSpinningBlades } from "react-icons/gi";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <motion.div
        className="flex items-center gap-4 bg-white p-8 rounded-xl shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <GiSpinningBlades className="text-5xl text-purple-600" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2"
        >
          <PiCoinsBold className="text-4xl text-pink-500" />
          <span className="text-xl font-bold text-gray-700">
            Loading Comics...
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-4 text-sm text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Preparing your comic book adventure!
      </motion.div>
    </div>
  );
}

export default Loading;
