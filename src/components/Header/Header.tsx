import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
      <div className="logo">
        <span className="text-black">Drive</span>
        <span className="text-primary">Easy</span>
      </div>
      <nav>
        <Link to="/Code_Auto" className="text-primary mx-2">Code de la route</Link>
        <Link to="/inscription" className="text-black mx-2">Inscription</Link>
        <Link to="/Connexion" className="btn btn-outline-primary">Connexion</Link>
      </nav>
    </header>
  );
}

export default Header;
