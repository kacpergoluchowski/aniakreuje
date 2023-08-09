import React from "react";
import imageOne from '../images/pngOne.png'
import imageTwo from '../images/pngTwo.png'
import imageThree from '../images/pngThree.png'
import imageFour from '../images/pngFour.png'
import imageFive from '../images/pngFive.png'
import imageSix from '../images/pngSix.png'
import imageSeven from '../images/pngSeven.png'
import imageEight from '../images/pngEight.png'
import Footer from '../components/Footer';

function ChangingButtons() {
    function showPortraits() {
        const portraits = document.querySelectorAll('.portrait');
        const images = document.querySelectorAll('.gallery > div img');
        images.forEach(item => {
            item.style.display = 'none';
        });
        portraits.forEach(item => {
            item.style.display = 'block';
        });
    }
    function showDigitals() {
        const digitals = document.querySelectorAll('.digital-art');
        const images = document.querySelectorAll('.gallery > div img');
        images.forEach(item => {
            item.style.display = 'none';
        });
        digitals.forEach(item => {
            item.style.display = 'block';
        });
    }

    return (
        <div className="changing-buttons">
            <button onClick={showPortraits} className="change-btn"> Portrety </button>
            <button onClick={showDigitals} className="change-btn"> Digital Art </button>
        </div>
    )
}

export default function Gallery() {
    const images = [{
        id: 1,
        image: imageOne,
        dataType: 'portrait' 
    },
    {
        id: 2,
        image: imageTwo,
        dataType: 'portrait'
    },
    {
        id: 3,
        image: imageThree,
        dataType: 'digital-art'
    },
    {
        id: 4,
        image: imageFour,
        dataType: 'digital-art'
    },
    {
        id: 5,
        image: imageFive,
        dataType: 'portrait'
    },
    {
        id: 6,
        image: imageSix,
        dataType: 'portrait'
    },
    {
        id: 7,
        image: imageSeven,
        dataType: 'digital-art'
    },
    {
        id: 8,
        image: imageEight,
        dataType: 'digital-art'
    }];

    return (
        <div className="gallery">
            <ChangingButtons/>
            <div className="images-container">
            {
                images.map(item => {
                    return (
                        <img src = {item.image} className={item.dataType} key = {item.id}/>
                    )
                })
            }
            </div>
        </div>
    )
}