import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Situation from "./Situation";

function Pay(props) {
  const navigate = useNavigate();
//   const [third , setthird]= useState(true)
let third = true
let first = true
let second = true

  return <div className="w-[700px] h-[700px] bg-red-200 p-8 flex flex-col justify-between items-center">
    <Situation first={first} second={second} third={third} />
    <button onClick={()=>{navigate('/')}}>pay the credit</button>
  </div>;
}

export default Pay;
