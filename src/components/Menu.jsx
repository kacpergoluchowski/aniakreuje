import React from "react";
import dataModeChanger from '../images/dataModeChanger.png'

export default function Menu() {
    function referenceToComponent(x, y) {
        window.scrollTo(x, y);
    }

    function changeMode() {
        const mode = document.querySelector('#root').getAttribute('data-mode');
        if(mode=='light')
            document.querySelector("#root").setAttribute('data-mode', 'dark');
        else    
            document.querySelector("#root").setAttribute('data-mode', 'light');
    }

    return (
        <div className="navbar-menu">
            <h2 onClick={() => referenceToComponent(0, 4450)}> Usługi i wycena </h2>
            <h2 onClick={() => referenceToComponent(0, 2100)}> Portfolio </h2>
            <img src = {dataModeChanger} onClick={changeMode}/>
        </div>
        
    )
}