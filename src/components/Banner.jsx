import { motion } from "motion/react";
import React from "react";
const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 5, repeat: Infinity }}
              src="https://i.ibb.co.com/PcS4rXk/corporate-workers-brainstorming-together-1.jpg"
              className="max-w-sm rounded-tl-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-400"
            />
            <motion.img
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 5, delay: 5, repeat: Infinity }}
              src="https://i.ibb.co.com/Zcp7drh/businesspeople-having-informal-meeting-1.jpg"
              className="max-w-sm rounded-tl-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-blue-400"
            />
          </div>
          <div className="flex-1">
            <motion.h1
              animate={{ x: 100 }}
              transition={{ duration: 2, delay: 2 }}
              className="text-5xl font-bold"
            >
              Box Office News!
            </motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-blue-400">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
