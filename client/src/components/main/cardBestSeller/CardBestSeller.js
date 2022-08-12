import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FilledCartIcon } from "../../../icons";

const CardBestSeller = ({ image, productName, price, category }) => {
  const [isHoverCard, setIsHoverCard] = useState(false);
  const [isHoverButton, setIsHoverButton] = useState(false);

  return (
    <motion.article
      className="flex flex-col items-center h-[380px] mx-3"
      onHoverStart={() => setIsHoverCard(true)}
      onHoverEnd={() => setIsHoverCard(false)}
    >
      <div className=" rounded-xl flex flex-col p-2 border-solid border-2 border-slate-100 z-10 w-64 relative bg-white hover:border-red-500 hover:border-2 hover:border-b-0">
        <span className="bg-red-600 px-2 py-1 text-white uppercase font-semibold w-24 text-center self-end absolute rounded-bl-lg">
          Nouveau
        </span>
        <img
          src={`/assets/image/${image}.jpg`}
          alt={productName}
          className="w-full pointer-events-none"
        />
        <div className="flex flex-col items-center">
          <h6 className="text-sm font-medium text-slate-400 uppercase text-center">
            {category}
          </h6>
          <h4 className="text-sm font-medium uppercase text-center cursor-pointer ">
            {productName}
          </h4>
          <span className="text-lg font-bold text-red-600">{price} €</span>
        </div>
      </div>

      <AnimatePresence>
        {isHoverCard && (
          <motion.div
            className="bg-slate-900 flex justify-center py-3 z-0 relative w-[90%] rounded-br-xl rounded-bl-xl"
            initial={{ y: "-100px" }}
            animate={{ y: 0 }}
            exit={{ y: "-100px" }}
            transition={{ ease: "easeOut" }}
          >
            <motion.button
              className="gap-2 bg-red-600 text-white font-semibold py-2 px-3 flex justify-center items-center rounded-full uppercase whitespace-nowrap cursor-pointer hover:bg-white hover:text-red-600 hover:border-2 hover:border-solid hover:border-red-600"
              onHoverStart={() => setIsHoverButton(true)}
              onHoverEnd={() => setIsHoverButton(false)}
              initial={{ width: "auto" }}
              animate={{ width: isHoverButton ? "220px" : "auto" }}
            >
              <AnimatePresence>
                {isHoverButton && <FilledCartIcon />}
              </AnimatePresence>
              <span> Ajouter au panier</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default CardBestSeller;
