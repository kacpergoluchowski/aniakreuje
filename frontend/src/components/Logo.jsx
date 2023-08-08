import React from "react";
import logo from '../images/logo.png'
import { Link, Outlet } from "react-router-dom";
export default function Logo() {
    return (
        <Link to = '/' onClick={() => window.scrollTo(0,0)}> 
            <div className="logo"> 
                <img src = {logo}/> 
                <h2> aniakreuje </h2> 
            </div>
        </Link>
        
    )
}