import React, { useEffect } from "react";
import quote from '../images/quote.png'
import personFirst from '../images/person-first.png'
import personSecond from '../images/person-second.png'
import personThird from '../images/person-thied.png'
import personFourth from '../images/personFourth.png'
import Aos from "aos";
import 'aos/dist/aos.css';

const data = [{
    id: 1,
    content: "Piękne",
    image: personFirst,
    username: 'Józek'
},
{
    id: 2,
    content: "Wspaniałe",
    image: personSecond,
    username: "Robert",
},
{
    id: 3,
    content: "Niesamowite",
    image: personThird,
    username: "Mateusz",
},
{
    id: 4,
    content: "Kapitalne",
    image: personFourth,
    username: "Kacper"
}]

function Reviev(props) {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div className="reviev" data-aos = 'fade-right'>
            <img src = {quote}/>
            <p> {props.content} </p>
            <div>
                <img src = {props.image}/>
                <h2> {props.username} </h2>
            </div>
        </div>
    )
}

const RevievsList = data.map(item => {
    return <Reviev content = {item.content} image = {item.image} username = {item.username} key = {item.id}/>
})

export default function Revievs() {
    return (
        <div className="revievs">
            <h1 data-aos = 'fade-left'> Zobacz komentarze! </h1>
            <div>
                {RevievsList}
            </div>  
        </div>
        
    )
}