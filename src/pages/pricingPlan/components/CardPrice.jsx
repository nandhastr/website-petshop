
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const CardPrice = ({name, choiceTitle, price, benefit, className}) => {
  return (
      <>
          <div className="flex flex-col justify-center items-center  bg-gray-100 py-6 mt-10">
              <div className="flex flex-col items-center">
                  <h3 className="text-lg font-semibold mb-2 uppercase">{name}</h3>
                  <p className="text-gray-600  mb-4">{choiceTitle}</p>
              </div>
              <div className={`${className} flex justify-center items-center py-8 px-6 text-2xl font-semibold w-full`}>
                  <span className="text-[1.4rem] md:text-[1.7rem] text-white">{price}</span>
                  <div className="flex justify-center items-end h-full">
                      <span className="text-[0.5rem] md:text-[0.7rem] text-white">/ Bulan</span>
                  </div>
              </div>
              <div className="flex flex-col w-full">
                  {benefit.map((item, index) => (
                      <div key={index} className="flex justify-between items-center  px-6 mt-8">
                          <h3 className="text-[0.7rem] md:text-[1rem]">{item.title}</h3>
                          <FontAwesomeIcon icon={item.icon} className={item.color} />
                      </div>
                  ))}
              </div>
              <div className="flex items-center bg-[#7AB730] py-4 px-6 mt-8 group">
                  <button className="text-white group-hover:text-black transition-all duration-500 ease-in-out">Beli Sekarang</button>
              </div>
          </div>
      </>
  );
}

export default CardPrice
