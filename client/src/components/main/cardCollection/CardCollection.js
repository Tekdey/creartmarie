import React from "react";
import { ArrowRoundedIcon } from "../../../icons";
import { motion } from "framer-motion";

const CardCollection = ({ title, image }) => {
  return (
    <motion.article
      className="border w-56 h-56 flex flex-col justify-center items-center cursor-pointer m-2 drop-shadow-xl border-4 border-solid border-white"
      style={{
        backgroundImage: `url("/assets/image/${image}.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      whileHover={{ scale: 1.1 }}
    >
      <h6 className=" font-semibold text-xl p-5 bg-black bg-opacity-40 w-full text-center text-white">
        {title}
      </h6>
    </motion.article>
  );
};

export default CardCollection;
