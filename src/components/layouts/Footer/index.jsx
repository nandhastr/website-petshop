import React from "react";
import Title from "../../common/GrandTitle/Title";
import CopyRight from "../../common/CopyRight";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faFacebook, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const quickLinks = [
        { link: "Beranda", href: "/" },
        { link: "Tentang", href: "/tentang" },
        { link: "Layanan", href: "/layanan" },
        { link: "Produk", href: "/produk" },
        { link: "Kontak", href: "/kontak" },
    ];
    return (
        <>
            <footer className="bg-gray-100 text-gray-600">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-4">
                    <div className="flex flex-col gap-4 ">
                        <Title title="" subtitle="Hubungi Kami" className={"font-bold text-md md:text-xl"} />
                        <div className="flex">
                            <p className="break-all text-[0.8rem] md:text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, quae?</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-4  items-center">
                                <FontAwesomeIcon icon={faLocationDot} className="text-[#7AB730]" />
                                <p className="break-all text-[0.7rem] md:text-[1rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FontAwesomeIcon icon={faEnvelope} className="text-[#7AB730]" />
                                <p className="break-all text-[0.7rem] sm:text-sm md:text-[1rem]">Example@gmail.com</p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FontAwesomeIcon icon={faPhone} className="text-[#7AB730]" />
                                <p className="break-all text-[0.7rem] sm:text-sm md:text-[1rem]">62 xx xx xxx</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Title title="" subtitle="Tautan Populer" className={"font-bold text-md md:text-xl"} />
                        <div className="flex flex-col gap-2">
                            {quickLinks.map((links, index) => (
                                <div key={index} className="flex gap-4  items-center">
                                    <FontAwesomeIcon icon={faArrowRight} className="text-[#7AB730] origin-left hover:scale-x-150 transition-all duration-500 ease-in-out" />
                                    <a href={links.href} className="break-all text-[0.8rem] md:text-lg">
                                        {links.link}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Title title="" subtitle=" Ikuti Kami" className={"font-bold text-md md:text-xl"} />
                        <form action="" className=" flex group">
                            <input type="email" placeholder="Email" className="border border-[#7AB730] py-1 px-2 w-[100%] " />
                            <button className="bg-[#7AB730] py-1 px-2 text-white border border-l-0 group-hover:border-l-0 group-hover:border-[#7AB730] group hover:bg-transparent group-hover:text-[#7AB730]  transition-all duration-500 ease-in-out">Subscribe</button>
                        </form>
                        <h2>Ikuti Kami di:</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 justify-start items-center gap-4">
                            <div className="border border-[#7AB730] py-1 px-2 flex justify-center items-center group hover:bg-[#7AB730] transition-all duration-500 ease-in-out">
                                <FontAwesomeIcon icon={faTwitter} className="text-[#7AB730] group-hover:cursor-pointer group-hover:text-white  transition-all duration-500 ease-in-out" />
                            </div>
                            <div className="border border-[#7AB730] py-1 px-2 flex justify-center items-center group hover:bg-[#7AB730] transition-all duration-500 ease-in-out">
                                <FontAwesomeIcon icon={faFacebook} className="text-[#7AB730] group-hover:cursor-pointer group-hover:text-white  transition-all duration-500 ease-in-out" />
                            </div>
                            <div className="border border-[#7AB730] py-1 px-2 flex justify-center items-center group hover:bg-[#7AB730] transition-all duration-500 ease-in-out">
                                <FontAwesomeIcon icon={faLinkedin} className="text-[#7AB730] group-hover:cursor-pointer group-hover:text-white  transition-all duration-500 ease-in-out" />
                            </div>
                            <div className="border border-[#7AB730] py-1 px-2 flex justify-center items-center group hover:bg-[#7AB730] transition-all duration-500 ease-in-out">
                                <FontAwesomeIcon icon={faYoutube} className="text-[#7AB730] group-hover:cursor-pointer group-hover:text-white  transition-all duration-500 ease-in-out" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <CopyRight />
        </>
    );
};

export default Footer;
