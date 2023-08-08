import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

export default function Navbar() {
    return (
        <div className="navbar">
            <Logo/>
            <Menu/>
        </div>
    )
}