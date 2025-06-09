import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faComment } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import HeroImg from "../../assets/images/hero.jpg";
import DataUser from "./components/DataTestiUser/index.jsx";
import Title from "../../components/common/GrandTitle/Title/index.jsx";

const Testimonial = () => {
    const carouselRef = useRef(null);

    const scroll = (direction) => { 
        if (carouselRef.current) {
            const width = carouselRef.current.offsetWidth;
            carouselRef.current.scrollBy({
                left: direction === "left" ? -width : width, behavior: "smooth"})
        }
     }
    return (
        <>
            <div
                className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-[2fr_3fr]  p-8"
                style={{
                    backgroundImage: `url(${HeroImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="flex justify-center items-center">
                    <Title title={""} subtitle={"Apa Kata Mereka"} />
                </div>
                <div className="flex flex-col justify-start items-center bg-white py-10 px-6 relative mt-8 ">
                    <button
                        onClick={() => {
                            scroll("left");
                        }}
                        className="flex justify-center items-center bg-[#7AB730] w-[10%] h-10 text-white font-bold  z-[1] absolute top-1/2 -left-0"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <div ref={carouselRef} className="w-full flex overflow-y-hidden overflow-x-auto snap-x snap-mandatory smooth-scroll no-scrollbar space-x-8  mt-8 px-4 transition-all duration-700 ease-in-out ">
                        {DataUser.map((data) => (
                            <div key={data.id} className="flex flex-col justify-start items-center shrink-0 w-full snap-center px-4 ">
                                <div className="relative flex justify-center items-center shadow-lg">
                                    <img src={data.imgUser} className="w-20 h-25 " alt="" />
                                    <div className="flex justify-center items-center bg-white w-1/2 p-2 absolute -bottom-5 ">
                                        <span className="text-[#7AB730] text-2xl font-bold">
                                            <FontAwesomeIcon icon={faComment} />
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-8 px-4 md:px-[10%] mt-8 md:mt-5  ">
                                    <p className="text-[0.8rem] text-gray-600 break-all overflow-hidden">{data.testimonial}</p>
                                    <p className="text-gray-500">- {data.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => {
                            scroll("right");
                        }}
                        className="flex justify-center items-center bg-[#7AB730] w-[10%] h-10 text-white font-bold  z-[1] absolute top-1/2 -right-0"
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
