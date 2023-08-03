import React, { useEffect } from "react";
import image from '../images/portfolioSectionImage.png'
import Aos from "aos";
import 'aos/dist/aos.css'
import { Outlet, Link } from "react-router-dom";

export default function PortfolioSection() {
    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div className="portfolio-section">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"> <path fill="#ffffff" fill-opacity="1" d="M0,128L48,128C96,128,192,128,288,112C384,96,480,64,576,80C672,96,768,160,864,197.3C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path> </svg>
            <div>
                <div data-aos = 'fade-right' data-aos-duration='2000'>
                    <h1> Odkryj moje dzieła </h1>
                    <p> Przeniknij do mojego świata artystycznego, gdzie kolory i wyobraźnia splatają się w wyjątkowych dziełach! </p>
                    <Link to = 'portfolio'> <button className="btn"> Moje dzieła  </button> </Link>
                </div>
                <img src = {image} data-aos = 'fade-left' data-aos-duration='2000'/>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L60,58.7C120,53,240,43,360,80C480,117,600,203,720,208C840,213,960,139,1080,117.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
    )
}