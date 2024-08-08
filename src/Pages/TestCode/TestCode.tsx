// src/components/TestCode/TestCode.tsx
import React from 'react';
import './TestCode.css';
import testeImage from './assets/testeImage.jpg';

const TestCode: React.FC = () => {
  return (
    <div className="testcode-container">
      <div className="testcode-left">
       <img src={testeImage} alt="Test Thematique" className="testcode-image" />
      </div>
      <div className="testcode-right">
        <h3>LES TESTS DE CODE</h3>
        <h1 className="main-title">Vos <span className="highlight">tests</span> de code de la route</h1>
        <p className="description">
          Conçus par des professionnels de l'enseignement de la conduite, ils vous permettront de vous préparer dans les meilleures conditions pour l'examen.
           Avec des examens blancs, des tests par thèmes et même des tests de questions orales, vous serez incollables !
        </p>
        <a href="#" className="learn-more-link">En savoir plus</a>
      </div>
    </div>
  );
}

export default TestCode;
