import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Situation from "./Situation";

function Basket() {
  // Initialize variables
  let first = true; // Flag for first time
  const navigate = useNavigate(); // Function to navigate between routes
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status
  const [productCounts, setProductCounts] = useState([]); // State to track individual product counts
  const [selectedProducts, setSelectedProducts] = useState([]); // State to store selected products

  // Load selected products from local storage on component mount
  useEffect(() => {
    const serializedProducts = localStorage.getItem("selectedProducts");
    if (serializedProducts) {
      const products = JSON.parse(serializedProducts);
      setSelectedProducts(products);
      setProductCounts(new Array(products.length).fill(1)); // Initialize product counts to 1
    }
  }, []);

  // Navigate to the next page based on login status
  const navigateToNextPage = () => {
    // if (isLoggedIn) {
    navigate("/address"); // Navigate to the address page if logged in
    // }
    // else {
    //   navigate("/login"); // Redirect to the login page if not logged in
    // }
  };

  //Handlers

  const decreaseHandler = (index) => {
    if (productCounts[index] > 0) {
      const newCounts = [...productCounts];
      newCounts[index] -= 1;
      setProductCounts(newCounts);

      // Update the product count in the selectedProducts array
      const updatedSelectedProducts = [...selectedProducts];
      updatedSelectedProducts[index].count -= 1;

      if (updatedSelectedProducts[index].count === 0) {
        // If count reaches 0, remove the product
        updatedSelectedProducts.splice(index, 1);
      }

      setSelectedProducts(updatedSelectedProducts);

      // Update the local storage with the modified selectedProducts array
      localStorage.setItem(
        "selectedProducts",
        JSON.stringify(updatedSelectedProducts)
      );
    }
  };

  const increaseHandler = (index) => {
    const newCounts = [...productCounts];
    newCounts[index] += 1;
    setProductCounts(newCounts);

    // Update the product count in the selectedProducts array
    const updatedSelectedProducts = [...selectedProducts];
    updatedSelectedProducts[index].count += 1;
    setSelectedProducts(updatedSelectedProducts);

    // Update the local storage with the modified selectedProducts array
    localStorage.setItem(
      "selectedProducts",
      JSON.stringify(updatedSelectedProducts)
    );
  };
  return (
    <div className=" flex flex-col items-center gap-8 w-full p-10 box-border overflow-y-auto max-h-[100vh]">
      <div className="self-center">
        <Situation first={first} second={""} third={""} />
      </div>
      {selectedProducts.length > 0 && (
        <div className="">
          <div className="flex flex-col  w-[500px]">
            {selectedProducts.map((product, index) => (
              <div key={index} className="flex border border-1 p-4">
                <img src={product.src} />
                <div className="flex flex-col gap-4 items-center justify-end mb-3">
                  <p className="font-bold">Name: {product.name}</p>
                  <p className="font-bold">Price: {product.price}</p>
                  <div className="flex justify-center gap-5 items-center bg-[#98B1CD] rounded-md text-white ">
                    <button
                      onClick={() => decreaseHandler(index)}
                      className="p-4 hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.3)]"
                    >
                      -
                    </button>
                    <div>{product.count}</div>
                    <button
                      onClick={() => increaseHandler(index)}
                      className="p-3 hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.3)]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-12">
        <button
        className="w-[200px] h-[48px] font-bold  bg-[#98B1CD] text-white rounded-lg mb-4 py-8 text-center flex items-center justify-center hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.3)]"
          onClick={() => {
            navigate("/");
          }}
        >
          go back
        </button>
        <button onClick={navigateToNextPage} className="w-[200px] h-[48px] font-bold  bg-[#98B1CD] text-white rounded-lg mb-4 py-8 text-center flex items-center justify-center hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.3)]">click to set address</button>
      </div>
    </div>
  );
}

export default Basket;
