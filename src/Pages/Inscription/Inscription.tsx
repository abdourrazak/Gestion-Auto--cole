import React, { useState } from 'react';
import './Inscription.css';
import roadIcon from './assets/Inscrip.jpg'; // Assurez-vous d'avoir l'image correcte
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faEnvelope, faEye, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Inscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const validateEmail = (e: React.FormEvent<HTMLFormElement>) => {
    if (!email.includes('@')) {
      e.preventDefault();
      alert("L'email doit contenir le caractère '@'.");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="inscription-container">
      <header className="header">
        <h1 className="logo">
          <Link to="/">
          <span className="text-black">Drive</span>
          <span className="text-primary">Easy</span>
          </Link>
        </h1>
        <div className="logout">
          <FontAwesomeIcon icon={faSignOutAlt} /> Déconnexion
        </div>
      </header>
      <div className="content">
        <h2 className="title">Inscription à <span className="text-black">Drive</span>
          <span className="text-primary">Easy</span></h2>
        <div className="steps">
          <div className="step active">1. Votre compte</div>
          <div className="step">2. Paiement</div>
        </div>
      </div>

      {/* Nouvelle section pour l'offre et le formulaire */}
      <div className="form-offer-container">
        <div className="offer">
          <img src={roadIcon} alt="Traffic Light" className="offer-image" />
          <p className="trial">Période d'essai gratuite de 7 jours</p>
          <ul className="features">
            <li>3200 Tests de Code</li>
            <li>Tests thématiques</li>
            <li>Examen blanc</li>
            <li>Tests Questions Orales</li>
            <li>Cours de Code</li>
            <li>Vidéos Apprendre à conduire</li>
            <li>Moniteur en ligne</li>
            <li>Statistiques</li>
          </ul>
        </div>
        <div className="form">
          <h3 className='connect'>Créez votre compte</h3>
          <p>Vous avez déjà un compte ? <Link to="/Connexion">Connectez-vous</Link></p>
          <form onSubmit={validateEmail}>
            <div className="form-group">
              <label>Email <span>*</span></label>
              <div className="input-icon">
                <input
                  type="email"
                  placeholder="Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
            </div>
            <div className="form-group">
              <label>Mot de passe <span>*</span></label>
              <div className="input-icon">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <FontAwesomeIcon icon={faEye} onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }} />
              </div>
            </div>
            <div className="form-group">
              <label>Prénom <span>*</span></label>
              <input type="text" placeholder="Prénom *" required />
            </div>
            <div className="form-group">
              <label>Nom <span>*</span></label>
              <input type="text" placeholder="Nom *" required />
            </div>
            <div className="form-group">
              <label>Coupon</label>
              <div className="input-icon">
                <input type="text" placeholder="XXXXXXXX" />
                <FontAwesomeIcon icon={faQuestionCircle} />
              </div>
            </div>
            <div className="form-groupe">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">J'accepte les <a href="#">conditions générales</a>.</label>
            </div>
            <button type="submit" className="submit-button">Étape suivante</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
