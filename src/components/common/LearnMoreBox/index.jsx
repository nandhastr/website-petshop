import React from 'react'

const LearnMoreBox = ({className, children}) => {
  return (
    <div className={`flex flex-col items-center justify-center   px-6 cursor-pointer text-sm md:text-md ${className}`}>
          {children}
    </div>
  )
}

export default LearnMoreBox
