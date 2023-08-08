import React, { useEffect } from "react";
import Logo from './Logo'
import MyProfile from "./MyProfile";

export default function About() {
    return (
        <div className="about-section">
            <Logo/>
            <span> Poznaj mój świat! </span>
            <MyProfile/>
        </div>
    )
}