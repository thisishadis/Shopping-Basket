import React, { useState } from 'react';

function Product({product ,handleClick}) {
    return (
        <div className='w-[150px] h-[100px] bg-white flex flex-col justify-between items-center m-1 p-2'>
            <p>Name : {product.name}</p>
            <p>Price : {product.price}</p>
            <button className='bg-red-500 text-white rounded-md py-1 px-2' onClick={handleClick()}>1 item</button>
        </div>
    );
}

export default Product;