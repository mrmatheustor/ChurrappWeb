import React from 'react';
import logo from './../icon.png';


import './Header.css';

export default function Header() {
    return (
        <div className="Header">
            <img src={logo} alt="" className="App-logo"></img>
            <div className="TituloBox">
                <h1 className="Titulo">Churrapp</h1>
            </div>
        </div>

    )
}