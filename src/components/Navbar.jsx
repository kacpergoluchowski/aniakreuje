import React, { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuBtn from '../images/menu-button-of-three-horizontal-lines.png'
import closeBtn from '../images/close (3).png'
import { Link } from "react-router-dom";

export default function Navbar() {
    const [displayMenu, setDisplayMenu] = useState(false);

    const showMenu = () => {
        setDisplayMenu(true);
    }

    const hideMenu = () => {
        setDisplayMenu(false);
    }

    return (
        <div className="navbar">
            <Logo/>
            <Menu/>
            <img src = {MenuBtn} onClick={showMenu}/>
            {displayMenu && (
                <div className="mobile-menu">
                    <img src = {closeBtn} onClick={hideMenu}/>
                    <Link to = '/order-page'> <h1> Usługi i wycena </h1> </Link>
                    <Link to = '/portfolio'> <h1> Moje portfolio </h1> </Link>
                </div>
            )}
        </div>
    )
}