import React from 'react'
import Title from '../../components/common/GrandTitle/Title'
import CardServices from './components/CardServices';
import DataServices from'./components/DataServices/index.js'; 
import { useLocation } from 'react-router-dom';
import Testimonial from './../Testimonial/index';
import Pricing from './../pricingPlan/index';

function Services() {

    const location = useLocation();

    const isDashboard = location.pathname === '/';
    return (
        <>
            <section>
                <div className="container mx-auto mb-8">
                    <div className="w-[90%] ">
                        <Title title={"Layanan"} subtitle={"Kami Selalu Menjaga Hewan Peliharaan Anda Tetap Bahagia Setiap Saat"} />
                    </div>
                </div>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-8 justify-center items-center">
                    {DataServices.map((services) => (
                        <CardServices key={services.id} awesomeIcon={services.icon} title={services.title} desc={services.description} />
                    ))}
                </div>
            </section>

            {!isDashboard && (
                <>
                    <Testimonial />
                    <Pricing/>
                </>
            )}
        </>
    );
}

export default Services
