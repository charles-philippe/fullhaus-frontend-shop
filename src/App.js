import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "./Components/ProductCard/ProductCard";
import Checkout from "./Components/Checkout/Checkout";
import { ShoppingBagProvider } from "./Context/ShoppingBagContext.js";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://fh-api-dev.herokuapp.com/api/products-service/products/website/CAD?page=0&limit=6"
      )
      .then((response) => {
        setProducts(response.data.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const products = [
  //   {
  //     _id: "1",
  //     fulhausProductName: "Sofa with Recliner",
  //     imageURLs: ["/sofa-1.jpg", "/sofa-2.jpg", "/sofa-3.jpg"],
  //     rating: 4.8,
  //     retailPrice: 1999.99,
  //   },
  //   {
  //     _id: "2",
  //     fulhausProductName: "Shaggy Carpet",
  //     imageURLs: ["/carpet-1.jpg", "/carpet-2.jpg"],
  //     rating: 4.6,
  //     retailPrice: 299.99,
  //   },
  //   {
  //     _id: "3",
  //     fulhausProductName: "Contemporary Side Table",
  //     imageURLs: ["/table-1.jpg", "/table-2.jpg"],
  //     rating: 4.2,
  //     retailPrice: 449.99,
  //   },
  //   {
  //     _id: "4",
  //     fulhausProductName: "Dining Table Set",
  //     imageURLs: ["/dining-1.jpg", "/dining-2.jpg", "/dining-3.jpg"],
  //     rating: 4.5,
  //     retailPrice: 799.99,
  //   },
  //   {
  //     _id: "5",
  //     fulhausProductName: "Dining Table Set",
  //     imageURLs: ["/dining-1.jpg", "/dining-2.jpg", "/dining-3.jpg"],
  //     rating: 4.5,
  //     retailPrice: 799.99,
  //   },
  //   {
  //     _id: "6",
  //     fulhausProductName: "Dining Table Set",
  //     imageURLs: ["/dining-1.jpg", "/dining-2.jpg", "/dining-3.jpg"],
  //     rating: 4.5,
  //     retailPrice: 799.99,
  //   },
  // ];

  return (    
    <div className="App">
      <ShoppingBagProvider>
      <div className="fixed w-full flex items-center justify-between px-4 py-3">
        <Checkout className="rounded-full shadow-lg p-3" />
      </div>
      <div
        className="main"
        style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}
      >
        <div className="categoryCover">
          <div className="innerCategory"></div>
        </div>
        <div
          className="products flex flex-wrap m-5"
          style={{ gridColumn: "2 / span 2" }}
        >
          {products &&
            products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
        </div>
      </div>
      </ShoppingBagProvider>
    </div>
  );
}

export default App;
