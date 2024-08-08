import React, { useState } from 'react';
import './Connexion.css';
import { Link } from 'react-router-dom';

const Connexion: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="connexion-page">
      <header className="header-connexion">
        <div className="logo">
          <Link to="/">
          <span className="text-black">Drive</span>
          <span className="text-primary">Easy</span>
          </Link>
        </div>
        <div className="create-account"><Link to='/Inscription'>Créer mon compte</Link></div>
      </header>
      <div className="contente">
        <h1 className="connexion-title">Connexion à votre compte</h1>
        <form className="login-form">
          <div className="form-group">
            <input type="email" id="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <div className="password-input-wrapper">
              <input 
                type={passwordVisible ? "text" : "password"} 
                id="password" 
                name="password" 
                placeholder="Mot de passe" 
                required 
              />
              <i 
                className="password-icon" 
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? '🙈' : '👁️'}
              </i>
            </div>
          </div>
          <div className="form-options">
            <a href="#" className="forgot-password">Mot de passe oublié ?</a>
            <label className="stay-connected">
              <input type="checkbox" />
              Rester connecté
            </label>
          </div>
          <button type="submit" className="submit-button">Connexion</button>
        </form>
      </div>
    </div>
  );
};

export default Connexion;
