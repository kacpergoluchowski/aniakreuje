import React from "react";
import dataModeChanger from '../images/dataModeChanger.png'
import { Link } from "react-router-dom";

export default function Menu() {
    function changeMode() {
        const mode = document.querySelector('#root').getAttribute('data-mode');
        if(mode=='light')
            document.querySelector("#root").setAttribute('data-mode', 'dark');
        else    
            document.querySelector("#root").setAttribute('data-mode', 'light');
    }

    
    return (
        <div className="navbar-menu">
            <Link to = '/order-page' onClick={() => window.scrollTo(0,0)}> <h2> Usługi i wycena </h2> </Link>
            <Link to = '/portfolio' onClick={() => window.scrollTo(0,0)}> <h2> Portfolio </h2> </Link>
            <img src = {dataModeChanger} onClick={changeMode}/>
        </div>
        
    )
}