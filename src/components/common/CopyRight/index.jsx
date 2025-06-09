import React from 'react'
import ScrollToTop from '../ScrollToTop';

const CopyRight = () => {
  return (
      <div className="text-center bg-gray-100 text-gray-600  border-t border-[#65656553] relative">
              <p className="text-[0.6rem] md:text-sm ">
                  &copy; {new Date().getFullYear()} All rights reserved.<span className="text-[#7AB730]">NandaTechD</span>.
          </p>
          <ScrollToTop/>
      </div>
  );
}

export default CopyRight
