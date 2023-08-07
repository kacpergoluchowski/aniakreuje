import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";

const Porfolio = () => {
    return (
        <>
            <Hero heroClass = 'portfolio-hero'/>
            <Navbar/>
            <Gallery/>
        </>
        
    )
}

export default Porfolio;