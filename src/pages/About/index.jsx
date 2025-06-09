import React, { useState } from "react";
import Title from "../../components/common/GrandTitle/Title";
import SpecialOffer from "../SpecialOffer";
import Team from "../Team";
import { useLocation } from "react-router-dom";

const About = () => {
    const [activeTab, setActiveTab] = useState("mission");

    const location = useLocation();

const isDashboard = location.pathname === '/';

    return (
        <>
            <section>
                <div className="container mx-auto flex flex-col justify-center items-center lg:grid lg:grid-cols-[1fr_2fr] gap-6">
                    <img src="/images/about.jpeg" className="w-full h-[50%] sm:h-[40%] md:h-[60%] lg:h-[90%]  mb-8" alt="" />
                    <div className="flex flex-col items-start ">
                        <Title title={"Tentang"} subtitle={"Kami Menjaga Hewan Peliharaan Anda Bahagia Sepanjang Waktu"} />
                        <p className="item-center text-gray-500 text-md md:text-lg font-semibold mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae repellat quia? Quisquam quae repellat quia? Quisquam</p>

                        <div className="bg-gray-100 p-4 w-full rounded-lg mt-6">
                            <div className="flex  justify-around mb-4">
                                <button onClick={() => setActiveTab("mission")} className={`w-1/2 h-10    transition-all duration-500 ease-in-out uppercase ${activeTab === "mission" ? "bg-[#7AB730] text-[#fff]" : "bg-transparent text-[#7AB730] hover:text-gray-500"}`}>
                                    Misi
                                </button>
                                <button onClick={() => setActiveTab("vission")} className={`w-1/2 h-10  ${activeTab === "vission" ? "bg-[#7AB730] text-[#fff]" : "bg-transparent text-[#7AB730] hover:text-gray-500"} transition-all duration-500 ease-in-out uppercase`}>
                                    Visi
                                </button>
                            </div>
                            {activeTab === "mission" && (
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum at accusamus quasi exercitationem neque tempore ipsa blanditiis voluptates omnis. In odit reprehenderit eum optio labore explicabo hic placeat tempora repellat corrupti, voluptatem quasi dolorem
                                    dicta non dolores voluptates doloremque, laboriosam cum quis possimus et alias nesciunt molestiae sed? Accusamus!
                                </p>
                            )}
                            {activeTab === "vission" && (
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquid quas accusamus distinctio, nisi odio nemo molestias! Ipsam nostrum maxime aspernatur quisquam iure quae. Officiis sed maiores quaerat recusandae, illum tenetur doloremque quam? Eligendi,
                                    ipsam aliquid. Maiores porro fugiat officia officiis ab reiciendis at, sequi sunt. Laudantium veritatis exercitationem cupiditate!
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {!isDashboard && (
                <>
                    <SpecialOffer />

                    <Team />
                </>
            )}
        </>
    );
};

export default About;
