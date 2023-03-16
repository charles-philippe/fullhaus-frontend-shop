import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";
import { ShoppingBagContext } from "../../Context/ShoppingBagContext";

export const ProductCard = ({ product }) => {
  const { addToBag } = useContext(ShoppingBagContext);

  const handleAddToBagClick = () => {
    addToBag(product);
  };

  return (
    <div className="w-full md:w-1/3 bg-white overflow-hidden">
      <div className="m-2 border-gray-100 border-2">
        <img
          src={product.imageURLs[0]}
          alt={product.fulhausProductName}
          className="w-full"
        />
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 truncate">
            {product.fulhausProductName}
          </h3>

          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-yellow-400 ${
                  i < Math.floor(Math.random() * 5) + 1
                    ? "fill-current"
                    : "stroke-current"
                }`}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between items-center text-gray-700">
            <span className="font-semibold">
              $
              {product.retailPrice.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            <AddToCartButton handleClick={handleAddToBagClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
