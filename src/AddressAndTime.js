// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Situation from "./Situation";

// function AddressAndTime(props) {
//   const navigate = useNavigate();
//   let second = true;
//   let first = true;

//   };
//   return (
//     <div className="w-[700px] h-[700px] bg-yellow-300 flex flex-col items-center justify-between p-8">
//       <Situation second={second} first={first} third={""} />
//       <button
//         onClick={() => {
//           navigate("/pay");
//         }}
//       >
//         click to payment page
//       </button>
//     </div>
//   );
// }

// export default AddressAndTime;

import React from "react";
import { useNavigate } from "react-router-dom";
import Situation from "./Situation";

function AddressAndTime(props) {
  const navigate = useNavigate();
  let second = true;
  let first = true;

  // Function to count total item counts
  const etTotalItemPrice = () => {
    const serializedProducts = localStorage.getItem("selectedProducts");
    let totalPrice = 0;

    if (serializedProducts) {
      const products = JSON.parse(serializedProducts);
      for (const product of products) {
        totalPrice += parseFloat(product.price.replace(" $", ""));
      }
    }

    return totalPrice.toFixed(2); // Ensure two decimal places for the total price
  };
  const productsCount = () => {
    const serializedProducts = localStorage.getItem("selectedProducts");
    let totalCount = 0;
    if (serializedProducts) {
      const products = JSON.parse(serializedProducts);
      for (const product of products) totalCount += product.count;
    }
    return totalCount;
  };
  const TotalCount = productsCount();

  // Use the getTotalItemPrice function to get the total price
  const totalItemPrice = etTotalItemPrice();

  return (
    <div className="w-[700px] h-[100vh]  flex flex-col gap-24 items-center  p-8">
      <Situation second={second} first={first} third={""} />
      {/* <p>Total Item Price: ${totalItemPrice}</p> Display the total price */}
      <div className=" box-border w-[500px] h-[500px] border border-1 border-b-1 rounded-lg flex flex-col items-center justify-center gap-16 p-10 font-bold ">
        <div className="flex flex-col items-center justify-center gap-4">
        <p>
          Products Price({TotalCount}): ${totalItemPrice}
        </p>
        <p>Shipping Cost: free</p>
        </div>
        <button 
        onClick={() => {
          navigate("/pay");
        }}
        className="w-[200px] h-[28px] font-bold  bg-red-500 border border-red-500 hover:bg-white hover:text-red-500 hover:border hover:border-red-500 text-white rounded-lg mb-4 py-5 text-center flex items-center justify-center hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          Choose Delivery Time
        </button>
      </div>
      {/* <button
        className="w-[200px] h-[48px] font-bold  bg-[#98B1CD] text-white rounded-lg mb-4 py-8 text-center flex items-center justify-center hover:shadow-[0_25px_50px_-5px_rgba(0,0,0,0.3)]"
        onClick={() => {
          navigate("/pay");
        }}
      >
        click to payment page
      </button> */}
    </div>
  );
}

export default AddressAndTime;
