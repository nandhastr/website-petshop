import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faEye } from '@fortawesome/free-solid-svg-icons';

const CardProduct = ({imgProcuct, title, price, className}) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        setIsHovered(!isHovered);
    };

  return (
      <>
          <div onClick={handleClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`flex flex-col justify-center items-center  gap-6 w-max  bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group ${className}`}>
              <img src={imgProcuct} className="w-[200px]" alt="" />
              <div className="flex flex-col justify-center items-center text-center relative ">
                  <h3 className="text-lg font-semibold mb-2 uppercase">{title}</h3>
                  <p className="text-gray-600 font-bold  mb-4">{price}</p>

                  <div className={`flex justify-around bg-[#7AB730] w-full py-2  opacity-0 -bottom-20  transition-all duration-700 ease-in-out absolute ${isHovered ? "group-hover:opacity-100 group-hover:-bottom-10" : ""}`}>
                      <FontAwesomeIcon icon={faCartShopping} className="text-white" />
                      <FontAwesomeIcon icon={faEye} className="text-white" />
                  </div>
              </div>
          </div>
      </>
  );
}

export default CardProduct
