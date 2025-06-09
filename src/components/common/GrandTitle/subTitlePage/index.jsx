import React from 'react'

const SubTitlePage = ({children, className}) => {
  return <h1 className={`font-semibold ${className || `text-lg md:text-[2rem]`} `}>{children}</h1>;
}

export default SubTitlePage
