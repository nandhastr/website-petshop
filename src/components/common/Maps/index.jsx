import React from "react";

const Maps = () => {
    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.5437425442287!2d106.78116020983212!3d-6.323497493639566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ee46383ec701%3A0xb506c0fa87e9a07!2sMal%20Cinere!5e0!3m2!1sid!2sid!4v1749105082748!5m2!1sid!2sid"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Google Maps"
                className="w-full h-full mt-8"
            ></iframe>
        </>
    );
};

export default Maps;
