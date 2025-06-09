import React, { useEffect, useRef } from "react";

import Title from "../../components/common/GrandTitle/Title";
import CardProduct from "./components/CardProduct";
import DataProduct from "./components/DataProducts/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import SpecialOffer from './../SpecialOffer/index';
import Pricing from './../pricingPlan/index';

const Product = () => {
    const location = useLocation();
    const carouselRef = useRef(null);

    const isDashboard = location.pathname === '/'

    const loopedData = [...DataProduct, ...DataProduct, ...DataProduct];

    const scrollAmount = 280;

    useEffect(() => {
        const container = carouselRef.current;
        if (container) {
            // Set scroll posisi ke bagian tengah (data ke-2)
            const sectionWidth = container.scrollWidth / 3;
            container.scrollLeft = sectionWidth;
      }
      
    }, []);

    const handleScroll = () => {
        const container = carouselRef.current;
        if (!container) return;
    };

    const scroll = (direction) => {
        const container = carouselRef.current;
        if (!container) return;

        if (direction === "left") {
            container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <>
            <section>
                <div className="container mx-auto">
                    <Title title={"Produk"} subtitle={"Kami Menyediakan Produk Terbaik Untuk Hewan Peliharaan Anda"}  />
                    <div ref={carouselRef} onScroll={handleScroll} className="flex overflow-y-hidden overflow-x-auto snap-x snap-mandatory smooth-scroll no-scrollbar space-x-8 py-8 mt-8 px-4 transition-all duration-700 ease-in-out">
                        {loopedData.map((item, index) => (
                            <CardProduct key={index} imgProcuct={item.imgProcuct} title={item.title} price={item.price} className="snap-start w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0" />
                        ))}
                    </div>
                    <div className="container mx-auto flex justify-center items-center gap-4 mt-4">
                        <button onClick={() => scroll("left")} className="bg-[#7AB730] text-white px-6 py-2 rounded group">
                            <FontAwesomeIcon icon={faArrowLeft} className="origin-right group-hover:scale-x-150 group-hover:text-black transition-all duration-300 ease-in-out" />
                        </button>
                        <button onClick={() => scroll("right")} className="bg-[#7AB730] text-white px-6 py-2 rounded group">
                            <FontAwesomeIcon icon={faArrowRight} className="origin-left group-hover:scale-x-150 group-hover:text-black transition-all duration-300 ease-in-out" />
                        </button>
                    </div>
                </div>
            </section>

            {!isDashboard && (
                <>
                    <SpecialOffer />
                    <Pricing/>
                </>
            )}
        </>
    );
};

export default Product;
