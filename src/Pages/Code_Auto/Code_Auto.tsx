import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importez useNavigate pour la navigation
import './Code_Auto.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Img1 from './assets/Img1.png';
import Img2 from './assets/Img2.png';
import Img3 from './assets/Img3.png';
import Img4 from './assets/Img4.png';
import Img5 from './assets/Img5.png';
import Img6 from './assets/Img6.png';
import Img7 from './assets/Img7.png';
import Img8 from './assets/Img8.png';
import Img9 from './assets/Img9.png';
import Img10 from './assets/Img10.png';
import Img11 from './assets/Img11.png';
import Footer from '../Footer/Footer';

const CodeAuto: React.FC = () => {
  const navigate = useNavigate(); // Déclarez useNavigate pour l'utiliser dans les événements de clic

  const themes = [
    { title: 'CIRCULATION', description: 'Thématique phare du code de la route : la circulation. Elle regroupe tout ce qui est lié à la signalisation, croisement et dépassement, arrêt et stationnement, priorités et règles de circulation.', icon: Img1, thematiques: '6 THÉMATIQUES', route: '/circulation' },
    { title: 'CONDUCTEUR', description: 'Nous aborderons ici les notions de conduite en sécurité et d’état pour conduire.', icon: Img2, thematiques: '2 THÉMATIQUES', route: '/conducteur' },
    { title: 'ROUTE', description: 'On retrouve dans cette thématique les questions relatives aux conditions de conduite : la nuit, les intempéries, l’autoroute, les tunnels...', icon: Img3, thematiques: '5 THÉMATIQUES', route: '/route' },
    { title: 'AUTRES USAGERS', description: 'L’automobiliste doit partager la route avec les autres usagers : piétons, motards, cyclistes...', icon: Img4, thematiques: '2 THÉMATIQUES', route: '/autres-usagers' },
    { title: 'PREMIERS SECOURS', description: 'Les premiers secours sont une étape importante quand on arrive sur un lieu d’accident.', icon: Img5, thematiques: '3 THÉMATIQUES', route: '/premiers-secours' },
    { title: 'PRENDRE ET QUITTER SON VÉHICULE', description: 'Toutes les précautions à prendre avant d’entrer ou de sortir de son véhicule.', icon: Img6, thematiques: '2 THÉMATIQUES', route: '/prendre-quitter-vehicule' },
    { title: 'SÉCURITÉ DES PASSAGERS ET DU VÉHICULE', description: 'Tous nos contenus sur les notions d’installation sécurisée, d’équipements et d’aide à la conduite.', icon: Img7, thematiques: '3 THÉMATIQUES', route: '/securite-passagers' },
    { title: 'MÉCANIQUE ET ÉQUIPEMENTS DE SÉCURITÉ', description: 'Dans cette thématique, nous aborderons les notions d’état et d’entretien de la voiture.', icon: Img8, thematiques: '2 THÉMATIQUES', route: '/mecanique-equipements' },
    { title: 'RESPECT DE L’ENVIRONNEMENT', description: 'L’éco-conduite, l’éco-mobilité et la notion de véhicule responsable n’auront plus de secret pour toi.', icon: Img9, thematiques: '4 THÉMATIQUES', route: '/respect-environnement' },
    { title: 'NOTIONS DIVERSES', description: 'Les notions diverses regroupent les questions sur différents thèmes comme l’administratif du code de la route par exemple.', icon: Img10, thematiques: '4 THÉMATIQUES', route: '/notions-diverses' },
    { title: 'LES PANNEAUX', description: 'Deviens incollable sur les différents panneaux de signalisation : dangers, interdictions, obligations, indications ou directions.', icon: Img11, thematiques: '5 THÉMATIQUES', route: '/panneaux' },
  ];

  return (
    <div>
      <div className="header-container">
        <div className="header-content text-center py-5">
          <h1 className="header-title">Cours code de la route en ligne</h1>
        </div>
        <div className="text-content text-center py-4">
          <p>
            Apprendre le code de la route avec DriveEasy, c’est la première étape dans l'obtention du permis de conduire. Nous vous proposons différentes
            <strong> leçons de code</strong>, couvrant les dix thèmes officiels. Les supports pédagogiques sont choisis pour vous permettre de varier les approches et vous aurez à votre disposition aussi bien des
            <strong> cours de code de la route</strong> sous forme de vidéos que des cours écrits et des fiches synthétiques. Notre objectif est de vous aider à réussir votre examen du premier coup ! C'est pourquoi les contenus pédagogiques sont réalisés avec l'aide de moniteurs d'auto-école. Nous veillons par ailleurs à leur conformité avec l’examen officiel.                    </p>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          {themes.map((theme, index) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-10 mb-4"
              key={index}
              style={{ padding: '0 10px' }}
              onClick={() => navigate(theme.route)} // Ajoutez un gestionnaire d'événements pour la navigation
            >
              <div className="card h-100" style={{ maxWidth: '250px', margin: 'auto', cursor: 'pointer' }}>
                <div className="card-body text-center">
                  <img src={theme.icon} alt={theme.title} className="mb-3" style={{ width: '60px', height: '60px' }} />
                  <h5 className="card-title" style={{ fontSize: '18px', fontWeight: 'bold', color: '#000' }}>{theme.title}</h5>
                  <p className="card-text" style={{ fontSize: '14px', color: '#555' }}>{theme.description}</p>
                  <p className="text-danger" style={{ fontSize: '16px', fontWeight: 'bold' }}>{theme.thematiques}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Comment apprendre le code de la route efficacement ?</h2>
        <p>
          Apprendre les règles du code de la route est bien plus efficace quand on suit une méthode rigoureuse et progressive. Vous pouvez bien sûr assister aux leçons dans votre auto-école, mais rien ne vaut la formation numérique, depuis chez vous et à votre rythme. Nos <strong>cours de code de la route en ligne</strong> traitent les thématiques officielles : vous apprendrez donc les <span className="text-danger">règles relatives à la circulation</span>, au respect des autres usagers, vous saurez comment prendre et quitter votre véhicule. Nous abordons les questions liées au conducteur, à la route, aux <span className="text-danger">premiers secours</span>, ainsi qu'à la sécurité des passagers et de la voiture. Nos leçons de code de la route en ligne traitent aussi de la mécanique et des équipements de sécurité ainsi que du respect de l'environnement.
        </p>

        <h2 className="text-center mt-5 mb-4">Comment bien se préparer au passage du code de la route ?</h2>
        <p>
          Outre nos modules et cours complets, vous disposerez de <span className="text-danger">fiches de révision du code de la route</span> pour préparer votre examen dans les meilleures conditions.Vous mettrez ainsi toutes les chances de votre côté pour réussir l'examen du premier coup. Nos concepteurs de cours de code ont aussi développé différentes séries de tests, pour vous entraîner. Ces tests reprennent les thématiques officielles et sont complétés par des questionnaires spécifiques. Vous aurez aussi l'occasion de vous tester en situation réelle, en utilisant nos <span className="text-danger">codes blancs</span>. Tous ces outils pédagogiques ont été développés pour vous permettre d'être parfaitement au point lors de l'examen, en combinant leçons de code de la route en ligne, fiches synthétiques et batteries de tests.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default CodeAuto;
