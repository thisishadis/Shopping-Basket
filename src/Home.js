import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

// Sample data for products
const Data = [
  {
    name: "Galaxy Tab A7 Lite",
    count: 0,
    price: "9 $",
    src: "./images/1.webp",
  },
  {
    name: "iPad Pro 12.9 2022 WIFI",
    count: 0,
    price: "47.50 $",
    src: "./images/2.webp",
  },
  {
    name: "Surface Go 2 LTE-SUF",
    count: 0,
    price: "11 $",
    src: "./images/3.webp",
  },
  { name: "iPhone 13 Pro", count: 0, price: "88 $", src: "./images/4.webp" },
  {
    name: "Samsung Galaxy S21 Ultra",
    count: 0,
    price: "34.75 $",
    src: "./images/5.webp",
  },
  {
    name: "Google Pixel 6 Pro",
    count: 0,
    price: "26 $",
    src: "./images/6.webp",
  },
  { name: "OnePlus 9 Pro", count: 0, price: "65 $", src: "./images/7.webp" },
  { name: "Xiaomi Mi 11", count: 0, price: "41 $", src: "./images/8.webp" },
  { name: "Huawei P40 Pro", count: 0, price: "90 $", src: "./images/9.webp" },
  {
    name: "Sony Xperia 1 III",
    count: 0,
    price: "17 $",
    src: "./images/10.webp",
  },
  { name: "LG V60 ThinQ", count: 0, price: "41.25 $", src: "./images/11.webp" },
  {
    name: "Motorola Edge+",
    count: 0,
    price: "5.00 $",
    src: "./images/12.webp",
  },
  {
    name: "Oppo Find X3 Pro",
    count: 0,
    price: "20 $",
    src: "./images/13.webp",
  },
  {
    name: "ASUS ROG Phone 5",
    count: 0,
    price: "61 $",
    src: "./images/14.webp",
  },
  { name: "Vivo X60 Pro", count: 0, price: "92 $", src: "./images/15.webp" },
  { name: "Realme GT", count: 0, price: "29.99 $", src: "./images/16.webp" },
];

function Home(props) {
  const navigate = useNavigate();

  // Handler for adding a product to the basket
  const handleClick = (product) => {
    const serializedProducts = localStorage.getItem("selectedProducts");
    let products = [];
    if (serializedProducts) {
      products = JSON.parse(serializedProducts);
    }

    // Check if the product is already in the list
    const existingProductIndex = products.findIndex(
      (p) => p.name === product.name
    );

    if (existingProductIndex !== -1) {
      // Product already exists, increase its count
      products[existingProductIndex].count += 1;
    } else {
      // Product doesn't exist, add it with count 1
      product.count = 1;
      products.push(product);
    }

    localStorage.setItem("selectedProducts", JSON.stringify(products));
  };

  return (
    <div className="flex flex-col items-center w-full p-10 box-border overflow-y-auto max-h-[100vh]">
      <div className="flex gap-8 ">
        <p className="w-[200px] h-[48px] font-bold  bg-[#98B1CD] text-white rounded-lg mb-4 py-8 text-center flex items-center justify-center hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.3)]">
          HOME
        </p>
        <button
          className="w-[200px] h-[48px] font-bold  bg-[#98B1CD] border border-[#98B1CD] hover:bg-white hover:text-[#98B1CD] hover:border hover:border-[#98B1CD] text-white rounded-lg mb-4 py-8 text-center flex items-center justify-center hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          onClick={() => {
            navigate("/basket");
          }}
        >
          Click To BASKET
        </button>
      </div>
      <div className="grid grid-cols-5">
        {/* Loop through the product data and display each product */}
        {Data.map((product, index) => (
          <div
            className=" box-content w-[266px] h-[476px] bg-white flex flex-col items-center m-[2px] p-5 border border-1  gap-3  hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            key={index}
          >
            <img src={product.src} className="py-10" />
            <p className="font-bold "> {product.name}</p>
            <p className="font-bold ">{product.price} dollars</p>
            <button
              className="bg-[#98B1CD] border-[3px] border-[#98B1CD] text-white rounded-md py-1 px-2  hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-white hover:text-[#98B1CD] hover:font-bold  hover:border-[3px] hover:border-[#98B1CD]"
              onClick={() => handleClick(product)}
            >
              add to Basket
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
