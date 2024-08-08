import React from 'react';
import AspectItem from './AspectItem';
import './AspectList.css';

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

const AspectList: React.FC = () => {
  return (
    <div className="aspect-list">
      {aspects.map((aspect, index) => (
        <AspectItem key={index} text={aspect} />
      ))}
    </div>
  );
};

export default AspectList;
