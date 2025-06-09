import React, { useRef } from "react";
import Title from "../../components/common/GrandTitle/Title";
import NameCard from "./components/NameCard";
import DataTeam from "./components/DataTeam/index.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Team = () => {

    const carouselRef = useRef(null);
    const scrollAmount = 280;

    const scroll = (direction) => {
        const container = carouselRef.current;
        if (!container) return;

        if (direction === "left") {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            container.scrollBy({left: scrollAmount, behavior: "smooth" });
        }
    }
    return (
        <>
            <section>
                <div className="container mx-auto ">
                    <div className="w-[100%] md:w-[80%]">
                        <Title title={"Tim"} subtitle={"Tim Kami Berkomitmen Untuk Memberikan Layanan Terbaik Untuk Hewan Peliharaan Anda"} />
                    </div>
                    <div className="relative flex mt-8">
                        <div ref={carouselRef} className="flex overflow-y-hidden overflow-x-auto snap-x snap-mandatory smooth-scroll no-scrollbar space-x-6  mt-8 ">

                            {DataTeam.map((data) => (
                                <NameCard key={data.id} imgUrl={data.img} name={data.name} position={data.position} className="snap-start w-full  flex-shrink-0" />
                            ))}
                        </div>

                        <div className="flex flex-col  justify-center items-center -right-0 md:-right-10 absolute top-1/2 ">
                            <button
                                onClick={() => {
                                    scroll("right");
                                }}
                            >
                                <FontAwesomeIcon icon={faArrowRight} className="text-white  bg-[#7AB730] w-8 h-10 p-4 z-10 hover:text-black transition-all duration-500 ease-in-out " />
                            </button>

                            <button
                                onClick={() => {
                                    scroll("left");
                                }}
                            >
                                <FontAwesomeIcon icon={faArrowLeft} className="text-white  bg-[#7AB730] w-8 h-10 p-4 z-10 hover:text-black transition-all duration-500 ease-in-out " />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;
