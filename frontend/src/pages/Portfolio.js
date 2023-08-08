import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

const Porfolio = () => {
    return (
        <>
            <Hero heroClass = 'portfolio-hero'/>
            <Navbar/>
            <Gallery/>
            <Footer page = 'portfolio-footer'/>
        </>
        
    )
}

export default Porfolio;