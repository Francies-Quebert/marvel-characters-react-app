import React from "react";
import { motion } from "framer-motion";
import { transition } from "../utils/functions";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
const CharacterCard = ({ img, name, id }) => {
  return (
    <Link to={`character/${id}`}>
      <Tooltip title={<div>{name}</div>} placement="top">
        <motion.div
          initial={{ scale: 1.4 }}
          animate={{ scale: 1 }}
          transition={transition}
          whileHover={{ scale: 1.1 }}
          className="  rounded-md w-full "
          exit={{ opacity: 0 }}
        >
            <motion.img
              className=" rounded-md  w-full sm:h-60 object-cover object-left-top"
              src={img}
              alt={name}
            />
          <div className="font-bold text-2xl font-['Koulen'] text-center bg-white border rounded-b-md py-2">
            {name}
          </div>
        </motion.div>
      </Tooltip>
    </Link>
  );
};

export default CharacterCard;
