import React from "react";
import { CartIcon } from "../../../icons";

const CartButton = () => {
  return (
    <div className="w-10 h-8 text-white cursor-pointer">
      <CartIcon />
      <span className="relative bottom-9 left-6 px-1 rounded-full bg-red-500 text-white">
        5
      </span>
    </div>
  );
};

export default CartButton;
