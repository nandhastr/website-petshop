
import React from 'react'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import NavItems from './components/NavItems.jsx';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import NavbarSticky from '../Navbar-Sticky/NavbarSticky.jsx';

const Navbar = () => {
  return (
      <>
          <nav className="hidden md:block">
              <div className="grid grid-cols-3 w-[100%] border border-[#65656553]">
                  <div className="flex justify-center items-center py-2 border-l border-[#65656553]">
                      <NavItems icon={faLocationDot} title="Location" subtitle="New York"/>
                  </div>
                  <div className="flex justify-center items-center py-2 border-l border-[#65656553]">
                      <NavItems icon={faEnvelope} title="Email" subtitle="example@gmail.com" />
                  </div>
                  <div className="flex justify-center items-center py-2 border-l border-[#65656553]">
                      <NavItems icon={faPhone} title="Call Us" subtitle="62 xx xx xxx" />
                  </div>
              </div>
          </nav>

          <NavbarSticky />
      </>
  );
}

export default Navbar;
