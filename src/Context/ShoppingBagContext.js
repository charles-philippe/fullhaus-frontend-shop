import React, { createContext, useState } from "react";

export const ShoppingBagContext = createContext();

export const ShoppingBagProvider = ({ children }) => {
  const [bagItems, setBagItems] = useState([]);

  const addToBag = (item) => {
    // Check if item already exists in bagItems array
    const existingItem = bagItems.find((bagItem) => bagItem._id === item._id);
    if (existingItem) {
      // If item already exists in the bag, increment its quantity
      const updatedBagItems = bagItems.map((bagItem) =>
        bagItem._id === item._id
          ? { ...bagItem, quantity: bagItem.quantity + 1 }
          : bagItem
      );
      setBagItems(updatedBagItems);
    } else {
      // Otherwise add the item to the bag
      setBagItems([...bagItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromBag = (itemId) => {
    const updatedBagItems = bagItems.filter(
      (bagItem) => bagItem._id !== itemId
    );
    setBagItems(updatedBagItems);
  };

  const calculateTotal = () => {
    return bagItems.reduce(
      (total, bagItem) => total + bagItem.retailPrice * bagItem.quantity,
      0
    );
  };

  return (
    <ShoppingBagContext.Provider
      value={{ bagItems, addToBag, removeFromBag, calculateTotal }}
    >
      {children}
    </ShoppingBagContext.Provider>
  );
};
