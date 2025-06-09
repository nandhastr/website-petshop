import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NameCard = ({ imgUrl, name, position, className }) => {
    return (
        <div className={`group flex flex-col justify-center items-center bg-gray-100 w-max h-max ${className}`}>
            <div className="flex justify-center items-center relative w-full h-[20rem] md:w-[20rem] md:h-[20rem]  overflow-hidden">
                {/* Overlay */}
                <div className="flex gap-4 justify-center items-center absolute inset-0 bg-[#7AB730] w-5 h-5 opacity-0 group-hover:w-full group-hover:h-full group-hover:opacity-70 transition-all duration-700 ease-in-out z-10">
                    <a href="" className="bg-white text-xl px-2">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="" className="bg-white text-xl px-2">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </div>

                {/* Gambar */}
                <img src={imgUrl} alt="" className="w-full h-full md:w-[20rem] md:h-[20rem] group-hover:scale-115 transition-transform duration-500" />
            </div>

            {/* Teks */}
            <div className="py-2">
                <h2 className="text-xl font-bold text-center mt-4">{name}</h2>
                <p className="text-center text-gray-600 mt-2">{position}</p>
            </div>
        </div>
    );
};

export default NameCard;
