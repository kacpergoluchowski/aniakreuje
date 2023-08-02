import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function Hero(props) {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className={props.heroClass} data-aos = 'zoom-out'></div>
    )
}