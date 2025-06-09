import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const NavItems = ({icon, title, subtitle}) => {
  return (
      <div className="flex justify-center items-center gap-4">
          <FontAwesomeIcon icon={icon} className="text-[#7AB730] sm:text-2xl md:text-3xl lg:text-4xl" />
          <div className="flex flex-col  ">
              <h1 className="font-bold sm:text-sm md:text-md lg:text-lg">{title}</h1>
              <h1 className="text-[#656565] sm:text-sm md:text-md">{subtitle}</h1>
          </div>
      </div>
  );
}

export default NavItems
