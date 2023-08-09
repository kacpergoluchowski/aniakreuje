import React, { useEffect, useState } from "react";
import messanger from '../images/messenger (1).png'
import mail from '../images/mail.png'
import type1 from '../images/type1.png';
import type2 from '../images/type2.png';
import image from '../images/orderImage.png'
import { Link } from "react-router-dom";

let email, content, type;

function showOrderMessage() {
    const firstContainer = document.querySelector('.order-section .first')
    const configMessage = document.querySelector('.message-config');
    firstContainer.style.display = 'none'
    configMessage.style.display = 'flex';
}

function checkType(item) {
    const images = item.target.parentElement.querySelectorAll('img');
    images.forEach(image => {
        image.style.filter = 'brightness(100%)';
    });
    item.target.style.filter = 'brightness(50%)';
    type = item.target.getAttribute('data-type');
}

function sendMail() {
    fetch('http://127.0.0.1:8282/sendMail', {
        method: "POST",
        body: JSON.stringify({email: email, content: content, type: type}),
        headers: {
            "Content-type":"application/json"
        }
    })
}

function validateEmail(email) {
    var reg = '/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/';
    if(!reg.test(email))
        return false;
    else
        return true;
}

function checkCorrect(item) {
    if(item.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        sendMail();
        success();
    }
    else   
        alert("prosze wprowadzić poprawny adres email!");
}

function success() {
    document.querySelector('.message-config').style.display = 'none'
    document.querySelector('.success-section').style.display = 'flex';
}

export default function Order() {
    return (
        <StartOrder/>
    )
}

const StartOrder = () => {
    useEffect(() => {
        document.querySelector('.message-config').style.display = 'none';
        document.querySelector('.success-section').style.display = 'none';
    }, [])

    return (
        <div className="order-section">
            <div className="first">
                <Link to = 'https://www.messenger.com/t/100001647710286'> <button className="change-btn"> <img src = {messanger}/> Złóż zamówienie przez messangera  </button> </Link>
                <button onClick={showOrderMessage} className="change-btn"> <img src = {mail}/> Złóż zamówienie przez e-mail </button>
            </div>
            <div className="message-config">
                <div>
                    <h2> Wybierz typ rysunku </h2>
                    <div>
                        <img src = {type1} onClick={e => checkType(e)} data-type = 'digital-art'/>
                        <img src = {type2} onClick={e => checkType(e)} data-type = 'portrait'/>
                    </div>
                    <h2> Podaj twój mail kontaktowy </h2>
                    <input type = 'email' placeholder="twój mail..." onChange={e => email = e.target.value}/>
                    <h2> Dodatkowe uwagi </h2>
                    <input type = 'text' placeholder="uwagi..." onChange={e => content = e.target.value}/>
                    <span> *cena zostanie ustalona indywidualnie </span>
                    <button className="change-btn" onClick={() => checkCorrect(email)}> Wyślij </button>
                </div>
                <img src = {image}/>
            </div>
            <div className="success-section">
                <h1> Dziękuje za zamówienie! </h1>
                <p> Proszę oczekiwać wiadomości zwrotnej, która zostanie wysłana na podany email. </p>
                <Link to = '/'> <button onClick={success}> Powrót na stronę główną </button> </Link>
            </div>
        </div>
    )
}