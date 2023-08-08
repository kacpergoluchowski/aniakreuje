import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Order from "../components/Order";
import Footer from "../components/Footer";

const OrderPage = () => {
    return (
        <div className="order-page">
            <Hero heroClass = 'order-hero'/>
            <Navbar/>
            <Order/>
            <Footer page = 'portfolio-footer'/>
        </div>
        
    )
}

export default OrderPage;