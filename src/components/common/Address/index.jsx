import { faEnvelopeOpen, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Maps from '../Maps'

const Address = () => {
  return (
    <>
          <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                  <FontAwesomeIcon icon={faLocationDot} className="text-[#7AB730] text-2xl" />
                  <div className="flex flex-col ">
                      <h1 className="font-bold">Alamat</h1>
                      <p className="text-gray-500">Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>
              <div className="flex gap-4 items-center">
                  <FontAwesomeIcon icon={faEnvelopeOpen} className="text-[#7AB730] text-2xl" />
                  <div className="flex flex-col ">
                      <h1 className="font-bold">Email</h1>
                      <p className="text-gray-500">example@gmail.com</p>
                  </div>
              </div>
              <div className="flex gap-4 items-center">
                  <FontAwesomeIcon icon={faPhone} className="text-[#7AB730] text-2xl" />
                  <div className="flex flex-col ">
                      <h1 className="font-bold">Telepon</h1>
                      <p className="text-gray-500">62 xx xx xxx</p>
                  </div>
              </div>

              <Maps/>
             
      </div>
    </>
  )
}

export default Address
