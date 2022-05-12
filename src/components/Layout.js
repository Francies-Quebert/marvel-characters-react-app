import React from "react";
import { Link, Outlet } from "react-router-dom";

import { motion } from "framer-motion";
import { transition } from "../utils/functions";
const Layout = () => {
  return (
    <div className="bg-fallback bg-radial ">
      <div className=" text-center py-2 bg-black mb-4">
        <motion.div
          initial={{ scale: 1.4 }}
          animate={{ scale: 1 }}
          transition={transition}
          whileHover={{ scale: 1.1 }}
          className="bg-red-600 font-[Koulen] text-6xl text-white"
        >
          <Link to={`/`}> MARVEL </Link>
        </motion.div>
      </div>
      <div className="container px-[20px] sm:mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
