import React from "react";
import Logo from '../components/Logo'
import fb from '../images/facebookLogo.png'
import ig from '../images/instagramLogo.png'
import tt from '../images/tiktokLogo.png'

export default function Footer() {
    return (
        <footer>
            <table>
                <tr>
                    <th> MENU </th>
                    <th> SOCIAL MEDIA </th>
                </tr>
                <tr>
                    <td> Strona główna </td>
                    <td className = 'link'> <img src = {fb}/> Facebook </td>
                </tr>
                <tr>
                    <td> Moje portfolio </td>
                    <td className="link"> <img src = {ig}/> Instagram </td>
                </tr>
                <tr>
                    <td> Usługi i wycena </td>
                    <td className="link"> <img src = {tt}/> Tiktok </td>
                </tr>
            </table>
            <Logo/>
        </footer>
    )
}