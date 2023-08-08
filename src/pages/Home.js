import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import PortfolioSection from "../components/PortfolioSection";
import Revievs from "../components/Revievs";
import Offer from "../components/Offer";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Hero heroClass = 'home-hero'/>
            <Navbar/>
            <About/>
            <PortfolioSection/>
            <Revievs/>
            <Offer/>
            <Footer/>
        </>
        
    )
}

export default Home;