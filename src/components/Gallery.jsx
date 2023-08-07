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
            <button onClick={showPortraits}> Portrety </button>
            <button onClick={showDigitals}> Digital Art </button>
        </div>
    )
}

export default function Gallery() {
    const images = [{
        image: imageOne,
        dataType: 'portrait' 
    },
    {
        image: imageTwo,
        dataType: 'portrait'
    },
    {
        image: imageThree,
        dataType: 'digital-art'
    },
    {
        image: imageFour,
        dataType: 'digital-art'
    },
    {
        image: imageFive,
        dataType: 'portrait'
    },
    {
        image: imageSix,
        dataType: 'portrait'
    },
    {
        image: imageSeven,
        dataType: 'digital-art'
    },
    {
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
                        <img src = {item.image} className={item.dataType}/>
                    )
                })
            }
            </div>
            <Footer page = 'portfolio-footer'/>
        </div>
    )
}