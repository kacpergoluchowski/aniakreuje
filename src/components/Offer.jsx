import React, { useEffect } from "react";
import image from '../images/offerImage.png';
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Offer() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="offer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,64C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            <div>
                <img src = {image} data-aos = 'fade-right' data-aos-duration = '1000'/>
                <div data-aos = 'fade-left' data-aos-duration = '1000'> 
                    <h1> Twoje indywidualne zamówienie </h1>
                    <p> Mój cennik obejmuje różnorodne usługi artystyczne, dostosowane do Twoich potrzeb. Skontaktuj się ze mną, aby uzyskać indywidualną wycenę dla Twojego projektu. </p>
                    <button> Zamów </button>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    )
}