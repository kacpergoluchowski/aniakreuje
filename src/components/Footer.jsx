import React from "react";
import Logo from '../components/Logo'
import fb from '../images/facebookLogo.png'
import ig from '../images/instagramLogo.png'
import tt from '../images/tiktokLogo.png'
import { Link } from "react-router-dom";

export default function Footer(props) {
    const {page} = props;
    return (
        <footer className={page}>
                <div id = 'footer-menu'>
                    <ul>
                        <li className="header"> MENU </li>
                        <Link to = '/' onClick={() => window.scrollTo(0,0)}> <li> Strona główna </li> </Link>
                        <Link to = '/portfolio' onClick={() => window.scrollTo(0,0)}> <li> Moje portfolio </li> </Link> 
                        <Link to = '/order-page'> <li> Usługi i wycena </li> </Link>
                    </ul>
                    <ul>
                        <li className="header"> SOCIAL MEDIA </li>
                        <Link to = 'https://www.facebook.com/aneczkagoluchowska'> <li className="link"> <img src = {fb}/> Facebook </li> </Link>
                        <Link to = 'https://www.instagram.com/aniakreuje/'> <li className="link"> <img src = {ig}/> Instagram </li> </Link>
                        <Link to = 'https://www.instagram.com/aniakreuje/'> <li className="link"> <img src = {tt}/> TikTok </li> </Link>
                    </ul>
                </div>
            <Logo/>
        </footer>
    )
}

Footer.defaultProps = {
    page: null
}