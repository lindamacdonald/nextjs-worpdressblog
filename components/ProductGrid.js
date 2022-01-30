import { useState } from "react";
import products from "./products.json"
import Button from "./Button";

export default function ProductGrid() {
  return (
    <>
      <div className="lg:px-20 md:px-6 px-4 py-12">
        <h1 className="lg:text-4xl md:text-2xl text-xl font-medium lg:leading-9 md:leading-6 leading-4 text-gray-800">Shop All</h1>
        <p className="text-base leading-6 mt-4 text-gray-600">
          It is a long established fact that a reader will be distracted by the readable
          <br className="md:block hidden" />
          content of a page when looking at its layout.
        </p>
        <div className="mt-8 flex items-center md:justify-start justify-between md:space-x-4">
          <div className="sm:w-28 w-24 h-9 cursor-pointer hover:bg-gray-800 bg-gray-800 flex items-center justify-center">
            <p className="text-white text-sm leading-none">All Products</p>
          </div>
          <div className="sm:w-28 w-24 h-9 cursor-pointer group hover:bg-gray-800 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-800 group-hover:text-white text-sm leading-none">Seating</p>
          </div>
          <div className="sm:w-28 w-24 h-9 cursor-pointer group hover:bg-gray-800 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-800 group-hover:text-white text-sm leading-none">Tables</p>
          </div>
          <div className="sm:flex hidden sm:w-28 w-24 h-9 cursor-pointer group hover:bg-gray-800 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-800 group-hover:text-white text-sm leading-none">Storage</p>
          </div>
          <div className="sm:flex hidden sm:w-28 w-24 h-9 cursor-pointer group hover:bg-gray-800 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-800 group-hover:text-white text-sm leading-none">Accessories</p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between sm:hidden">
          <div className="sm:w-28 w-24 h-9 cursor-pointer group hover:bg-gray-800 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-800 group-hover:text-white text-sm leading-none">Storage</p>
          </div>
          <div className="sm:w-28 w-24 h-9 cursor-pointer group hover:bg-gray-800 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-800 group-hover:text-white text-sm leading-none">Accessories</p>
          </div>
          <div className="sm:w-28 w-24 h-9 cursor-pointer group hover:bg-gray-800 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-800 group-hover:text-white text-sm leading-none">Oak</p>
          </div>
        </div>
        <div className="mt-4 items-center sm:space-x-4 flex sm:justify-start justify-between">
          <div className="sm:flex hidden sm:w-28 w-24 h-9 cursor-pointer group hover:bg-gray-800 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-800 group-hover:text-white text-sm leading-none">Oak</p>
          </div>
          <div className="sm:flex hidden sm:w-28 w-24 h-9 cursor-pointer group hover:bg-gray-800 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-800 group-hover:text-white text-sm leading-none">Beech</p>
          </div>
          <div className="sm:w-28 w-24 h-9 cursor-pointer group hover:bg-gray-800 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-800 group-hover:text-white text-sm leading-none">Walnut</p>
          </div>
          <div className="sm:w-28 w-24 h-9 cursor-pointer group hover:bg-gray-800 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-800 group-hover:text-white text-sm leading-none">Ash</p>
          </div>
          <div className="sm:w-28 w-24 h-9 cursor-pointer group hover:bg-gray-800 bg-gray-100 flex items-center justify-center">
            <p className="text-gray-800 group-hover:text-white text-sm leading-none">Not wood</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mt-6 gap-8">
          <div className="lg:w-72 md:pr-8 sm:block hidden" />
          <div className="lg:w-72 md:pr-8 sm:block hidden" />
          <div className="lg:w-72 md:pr-8 sm:block hidden" />
          <p className="text-xs font-medium leading-3 text-gray-800 text-right flex items-center justify-end md:pr-8 sm:mt-8 mt-3">
            Sort by
            <svg className="ml-2" width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.22725 3.91475C2.44692 3.69508 2.80308 3.69508 3.02275 3.91475L6 6.892L8.97725 3.91475C9.19692 3.69508 9.55308 3.69508 9.77275 3.91475C9.99242 4.13442 9.99242 4.49058 9.77275 4.71025L6.39775 8.08525C6.17808 8.30492 5.82192 8.30492 5.60225 8.08525L2.22725 4.71025C2.00758 4.49058 2.00758 4.13442 2.22725 3.91475Z" fill="#242424" />
            </svg>
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-8">
            {products.map(product => {
                return (
                <div key={product.id} className="lg:w-72 md:pr-8">
                <img src={product.image} alt="table image" className="w-full" />
                <p className="text-sm font-medium leading-none mt-3 text-gray-800">{product.title}</p>
                <p className="text-xs font-medium leading-3 text-gray-600 mt-2">{product.price}</p>
                < Button />
                </div>
               
                    )
            })}  
            
          
                  </div>
      </div>
    </>
  );
}


