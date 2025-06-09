import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const CardServices = ({awesomeIcon, title, desc}) => {
    return (
      
      <div className="flex flex-col md:flex-row gap-6 justify-center md:items-start bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FontAwesomeIcon icon={awesomeIcon} className="text-8xl text-[#7AB730]"/>
          <div className="flex flex-col ">
              <h3 className="text-lg font-semibold mb-2 uppercase">{title}</h3>
              <p className="text-gray-600  mb-4">{desc}</p>
              <button className="flex  items-center text-[#7AB730] py-2 rounded  group">
                  <div className="flex flex-col">
                      <span className="text-[0.8rem] sm:text-sm md:text-md">Baca Selengkapnya</span>
                      <div className="border w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                  </div>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 transition-transform duration-500 ease-in-out origin-left group-hover:scale-x-180" />
              </button>
          </div>
      </div>
  );
}

export default CardServices
