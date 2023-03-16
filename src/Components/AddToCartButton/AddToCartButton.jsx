import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export const AddToCartButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full focus:outline-none hover:bg-gray-300 hover:shadow-md"
    >
      <MdOutlineAddShoppingCart className="text-xl text-red-500" />
    </button>
  );
};
