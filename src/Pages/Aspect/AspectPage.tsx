import React from 'react';
import './AspectPage.css';

const aspects = [
  "Installation au poste de conduite",
  "Découverte des éléments mécaniques",
  "Mise en mouvement du véhicule",
  "Manipulation du volant",
  "Passage des vitesses",
  "Découverte des manœuvres",
  "Les tournants",
  "Les intersections",
  "Les virages",
  "Les dépassements",
  "Les voies",
  "Les distances de sécurité"
];

const AspectPage: React.FC = () => {
  return (
    <div className="aspect-page-container">
      <h2 className="aspect-page-title">Tous les aspects essentiels de la conduite</h2>
      <div className="aspect-items-container">
        {aspects.map((aspect, index) => (
          <div key={index} className="aspect-item">
            <div className="aspect-icon" />
            {aspect}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AspectPage;
