import React from "react";
import { useNavigate } from "react-router-dom";

function Situation({first , second  ,third}) {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center gap-4 w-[500px] h-[80px] bg-white font-bold">
      <div  className={first? 'text-red-500' : ''}>Basket</div>
      <div   className={second &&first ?'text-red-500 flex justify-center items-center gap-4': 'flex justify-center items-center gap-4'}>
        <p>--------</p>
        <p>Address</p>
      </div>
      <div   className= { third && second && first ? 'text-red-500 flex justify-center items-center gap-4':'flex justify-center items-center gap-4'}>
        <p>--------</p>
        <p>Payment</p>
      </div>
    </div>
  );
}

// onClick={() => {navigate("/");}}
export default Situation;
