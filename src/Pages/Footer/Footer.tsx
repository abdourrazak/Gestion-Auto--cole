import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footerr">
      <div className="footer-section">
        <div className="footer-logo">
          <h2 className='Footer-titlee'>
          <span className="text-black">Drive</span>
          <span className="text-primary">Easy</span>
          </h2>
        </div>
        <div className="footer-application">
          <i className="icon-phone" /> Application
          <br />
          Code de la route
        </div>
      </div>
      <div className="footer-section">
        <h3>PARTENAIRES</h3>
        <ul>
          <li>Livre pour les nuls</li>
          <li>MMA Zérotracas</li>
          <li>Permis à points</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>
        <span className="text-black">Drive</span>
        <span className="text-primary">Easy</span>
        </h3>
        <ul>
          <li>Avis</li>
          <li>Centre d’aide</li>
          <li>Qui sommes-nous ?</li>
          <li>Informations légales</li>
          <li>Conditions générales</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-social">
        <i className="icon-youtube" />
        <i className="icon-twitter" />
        <i className="icon-facebook" />
        <i className="icon-instagram" />
      </div>
      <div className="footer-copy">
        &copy; DFC Production 2024. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;