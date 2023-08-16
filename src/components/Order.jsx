import React, { useState, useEffect } from "react";
import messanger from '../images/messenger (1).png';
import mail from '../images/mail.png';
import type1 from '../images/type1.png';
import type2 from '../images/type2.png';
import image from '../images/orderImage.png';
import { Link } from "react-router-dom";

export default function Order() {
    const [file, setFile] = useState(null);
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [type, setType] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);
    const [showConfig, setShowConfig] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showChoice, setShowChoice] = useState(true);

    const showOrderMessage = () => {
        setShowConfig(true);
        setShowChoice(false);
    };

    const checkType = (item) => {
        const images = item.target.parentElement.querySelectorAll('img');
        images.forEach(image => {
            image.style.filter = 'brightness(100%)';
        });
        item.target.style.filter = 'brightness(50%)';
        setType(item.target.getAttribute('data-type'));
    };

    const fileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const checkCorrect = (item) => {
        if (item.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            sendMail();
            success();
        } else {
            alert("prosze wprowadzić poprawny adres email!");
        }
    };

    const sendMail = async () => {
        const formData = new FormData();
        formData.append('file', file);

        const data = {
            email: email,
            content: content,
            type: type,
        }
        formData.append('data', JSON.stringify(data))

        await fetch(`http://127.0.0.1:8282/sendMail`, {
            method: "POST",
            body: formData,
        });

        setSuccessMessage(true);
    };

    const success = () => {
        setShowConfig(false);
        setShowSuccess(true);
    };

    return (
        <div className="order-section">
            {showChoice && (
                <div className="first">
                    <Link to='https://www.messenger.com/t/100001647710286'>
                        <button className="change-btn">
                            <img src={messanger} alt="Messenger" /> Złóż zamówienie przez messangera
                        </button>
                    </Link>
                    <button onClick={showOrderMessage} className="change-btn">
                        <img src={mail} alt="Email" /> Złóż zamówienie przez e-mail
                    </button>
                </div>
            )}
            {showConfig && (
                <div className="message-config">
                    <div>
                        <h2> Wybierz typ rysunku </h2>
                        <div>
                            <img src={type1} alt="Type 1" onClick={e => checkType(e)} data-type='digital-art' />
                            <img src={type2} alt="Type 2" onClick={e => checkType(e)} data-type='portrait' />
                        </div>
                        <h2> Wybierz zdjęcie do odwzorowania </h2>
                        <input type='file' name='file' onChange={fileChange} />
                        <h2> Podaj twój mail kontaktowy </h2>
                        <input type='email' placeholder="twój mail..." onChange={e => setEmail(e.target.value)} />
                        <h2> Dodatkowe uwagi </h2>
                        <input type='text' placeholder="uwagi..." onChange={e => setContent(e.target.value)} />
                        <span> *cena zostanie ustalona indywidualnie </span>
                        <button className="change-btn" onClick={() => checkCorrect(email)}> Wyślij </button>
                    </div>
                    <img src={image} alt="Order" />
                </div>
            )}
            {showSuccess && (
                <div className="success-section">
                    <h1> Dziękuję za zamówienie! </h1>
                    <p> Proszę oczekiwać wiadomości zwrotnej, która zostanie wysłana na podany email. </p>
                    <Link to='/'>
                        <button onClick={success}> Powrót na stronę główną </button>
                    </Link>
                </div>
            )}
        </div>
    );
}
