import React from 'react';
import logo from '../../assets/image/icon.png';
import insta from '../../assets/image/insta.png';
import email from '../../assets/image/email.png';

import '../../fonts/candy.ttf'


import './Header.css';

export default function Header() {

    function instaChurrapp() {
        var win = window.open('https://www.instagram.com/churrappbrasil/', '_blank');
        win.focus();
    }

    return (
        <div className="Header">
            <div className="TituloBox">
                <img src={logo} alt="" className="App-logo"></img>
                <h1 className="Titulo">Churrapp</h1>
            </div>
            <div className="TituloBox">
                <img src={insta} alt="" className="insta" onClick={instaChurrapp}></img>
                <a href="mailto: contato@churrapp.com"><img src={email} alt="" className="email"></img></a>
            </div>
        </div>

    )
}