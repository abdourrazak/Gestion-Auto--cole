// src/components/Header/Header.tsx

import React from 'react';
//import logo from '../assets/logo.png'
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
      <div className="logo">
         {/*<img src={logo} alt='Logo' className="logo-img" />*/} 
        <span className="text-black">Drive</span>
        <span className="text-primary">Easy</span>
      </div>
      <nav>
        <a href="#code" className="text-primary mx-2">Code de la route</a>
        <a href="#inscription" className="text-black mx-2">Inscription</a>
        <button className="btn btn-outline-primary">Connexion</button>
      </nav>
    </header>
  );
}

export default Header;
