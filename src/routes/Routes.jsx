import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard/pages";
import About from "../pages/About";
import Services from "../pages/Services";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import MainLayout from "../components/layouts/MainLayout";

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    
                    <Route element={<MainLayout />}>
                        <Route path="/tentang" element={<About />} />
                        <Route path="/layanan" element={<Services />} />
                        <Route path="/produk" element={<Product />} />
                        <Route path="/kontak" element={<Contact />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;
