import React from "react";
import myImage from '../images/myProfileImage.png' 
import fb from '../images/facebookLogo.png'
import ig from '../images/instagramLogo.png'
import tt from '../images/tiktokLogo.png'
import Aos from "aos";
import 'aos/dist/aos.css';
import { Outlet, Link } from "react-router-dom";

export default function MyProfile() {
    return (
        <div className="about--my-profile">
            <img src = {myImage} data-aos='fade-right' data-aos-duraton = '2000'/>
            <div data-aos='fade-left'>
                <h1> Kim jestem? </h1>
                <p> Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                    Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem 
                </p>
                <div>
                    <Link to = {"https://www.facebook.com/aneczkagoluchowska"}> <img src = {fb}/> </Link>
                    <Link to = {"https://instagram.com/ania.goluchowska?igshid=MzRlODBiNWFlZA=="}> <img src = {ig}/> </Link>
                    <Link to = {"https://www.facebook.com/aneczkagoluchowska"}> <img src = {tt}/> </Link>
                </div>
            </div>
        </div>
    )
    
}