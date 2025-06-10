import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import HeroImg from "/images/logo.png";

const NavbarSticky = () => {
    const [isScroll, setIsScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const currentUrl = location.pathname;

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 5);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMenuMobile = () => {
        setIsOpen(!isOpen)
    }

    const navItem = [
        {
            name: "Beranda",
            endpoint: "/",
        },
        {
            name: "Tentang",
            endpoint: "/tentang",
        },
        {
            name: "Layanan",
            endpoint: "/layanan",
        },
        {
            name: "Produk",
            endpoint: "/produk",
        },
    ];
    return (
        <>
            <nav className={`${!isScroll ? "bg-white md:h-[4rem]" : "bg-gray-100 md:h-[5rem]"} transition-all duration-400 ease-in-out w-full flex-col md:flex justify-center items-center shadow-md sticky top-0 z-50`}>
                <div className="hidden md:grid grid-cols-[1fr_2fr_1fr] w-full h-full">
                    {/* Logo & Judul */}
                    <div className="flex justify-center items-center gap-4 w-full">
                        <img src={HeroImg} className="w-5 h-5 md:w-10 md:h-10" alt="LOGO" />
                        <span className="text-2xl font-bold ">PET SHOP</span>
                    </div>

                    {/* Navigation Items */}
                    <div className="flex justify-center items-center   gap-6 w-full ">
                        {navItem.map((item, index) => (
                            <div key={index} className="flex justify-center items-center h-full  relative group">
                                <div className={`border-nav border-t-8 w-0 group-hover:w-full absolute -top-[0.09rem] transition-all duration-500 ease-in-out`}></div>
                                <Link to={item.endpoint} className={`sm:text-sm md:text-md lg:text-lg font-semibold hover:cursor-pointer hover:text-[#7AB730] uppercase transition-all duration-500 ease-in-out ${currentUrl === item.endpoint ? "text-[#7AB730]" : ""}`}>
                                    {item.name}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Contact Button */}
                    <div className="bg-green-400 flex justify-center items-center   w-full h-full">
                        <Link to="/kontak" className={`sm:text-sm md:text-md lg:text-lg  font-semibold hover:cursor-pointer hover:text-white transition-all duration-500 ease-in-out uppercase ${currentUrl === "/kontak" ? "text-white" : ""}`}>
                            Kontak
                        </Link>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex flex-col md:hidden w-full px-2 md:px-6 py-4 ">
                    <div className="flex ">
                        <div className="flex items-center gap-2 ms:gap-4 w-full ">
                            <img src={HeroImg} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" alt="LOGO" />
                            <span className="text-md sm:text-lg md:text-2xl font-bold ">PET SHOP</span>
                        </div>

                        <button onClick={handleMenuMobile}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                </div>
                <div className={`flex flex-col gap-4 w-full p-6 ${isOpen ? "block" : "hidden"}`}>
                    {navItem.map((item, index) => (
                        <Link key={index} to={item.endpoint} className={`text-[0.8rem] sm:text-sm md:text-lg font-semibold hover:cursor-pointer hover:text-[#7AB730] uppercase transition-all duration-500 ease-in-out  ${currentUrl === item.endpoint ? "text-[#7AB730]" : ""}`}>
                            {item.name}
                        </Link>
                    ))}
                    <Link to="/kontak" className={`text-center py-2 text-[0.8rem] sm:text-sm md:text-lg  font-semibold hover:cursor-pointer hover:text-[#7AB730] transition-all duration-500 ease-in-out uppercase ${currentUrl === "/kontak" ? "text-[#7AB730] border" : "text-white bg-[#7AB730]"}`}>
                        Kontak
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default NavbarSticky;
