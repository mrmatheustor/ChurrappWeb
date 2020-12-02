import React from 'react';
import logo from '../../assets/image/icon.png';

import '../../fonts/candy.ttf'


import './Header.css';

export default function Header() {
    return (
        <div className="Header">
            <div className="TituloBox">
                <img src={logo} alt="" className="App-logo"></img>
                <h1 className="Titulo">Churrapp</h1>
            </div>
        </div>

    )
}