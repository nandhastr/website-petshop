import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CardBlog = ({category, title, date, image, content }) => {
  return (
    <>
          <div className="flex flex-col md:flex-row bg-gray-100  " >
              <img src={image} className="w-[100%] md:w-[50%] h-[100%]" alt="" />
              <div className="flex flex-col justify-center gap-8 py-4 px-4">
                  <div className="flex gap-4 text-sm">
                      <span className="flex justify-center items-center gap-2"><FontAwesomeIcon icon={faBookmark} />{category}</span>
                      <span className="flex justify-center items-center gap-2"><FontAwesomeIcon icon={faCalendar} />  {date}</span>
                  </div>
                  <div className="flex flex-col gap-4">
                        <h1 className="text-lg font-bold">{title}</h1>    
                      <p className="text-gray-500">{content}</p>                  
                      <button className="text-[#7AB730] hover:text-black transition-all duration-500 ease-in-out group">Baca Selengkapnya 
                          <FontAwesomeIcon icon={faArrowRight} className="ml-2 origin-left group-hover:scale-x-150 transition-all duration-500 ease-in-out" />
                       </button>
                  </div>
              </div>
      </div>
    </>
  )
}

export default CardBlog
