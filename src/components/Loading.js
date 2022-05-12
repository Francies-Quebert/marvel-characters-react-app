import React from "react";
import { motion } from "framer-motion";
import { transition } from "../utils/functions";
const Loading = () => {
  const loading = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const letter = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: { duration: 1, ...transition, repeat: Infinity },
    },
  };

  return (
    <motion.div className="model">
      <motion.span
        className="text-center text-6xl font-[Koulen]"
        variants={loading}
      >
        <motion.span variants={letter}>L</motion.span>
        <motion.span variants={letter}>O</motion.span>
        <motion.span variants={letter}>A</motion.span>
        <motion.span variants={letter}>D</motion.span>
        <motion.span variants={letter}>I</motion.span>
        <motion.span variants={letter}>N</motion.span>
        <motion.span variants={letter}>G</motion.span>
      </motion.span>
    </motion.div>
  );
};

export default Loading;
