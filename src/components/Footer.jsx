import React from "react";
import Logo from '../components/Logo'
import fb from '../images/facebookLogo.png'
import ig from '../images/instagramLogo.png'
import tt from '../images/tiktokLogo.png'

export default function Footer() {
    return (
        <footer>
                <div id = 'footer-menu'>
                    <ul>
                        <li className="header"> MENU </li>
                        <li> Strona główna </li>
                        <li> Moje portfolio </li>
                        <li> Usługi i wycena </li>
                    </ul>
                    <ul>
                        <li className="header"> SOCIAL MEDIA </li>
                        <li className="link"> <img src = {fb}/> Facebook </li>
                        <li className="link"> <img src = {ig}/> Instagram </li>
                        <li className="link"> <img src = {tt}/> TikTok </li>
                    </ul>
                </div>
            <Logo/>
        </footer>
    )
}