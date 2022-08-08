import React from "react";
import { ArrowRoundedIcon } from "../../../icons";
import { motion } from "framer-motion";

const CardCollection = ({ title, image }) => {
  return (
    <motion.article
      className="border w-56 h-56 flex flex-col justify-between items-center cursor-pointer m-2"
      style={{
        backgroundImage: `url("/assets/image/${image}.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      whileHover={{ scale: 1.1 }}
    >
      <h6 className=" font-semibold text-xl p-5">{title}</h6>
      <i className="flex gap-1 uppercase py-3 cursor-pointer">
        <p>Acheter maintenant</p>
        <ArrowRoundedIcon />
      </i>
    </motion.article>
  );
};

export default CardCollection;
