import React, { useRef, useState } from 'react';
import './Circulation.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Circulation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleOpen2 = () => {
    setIsOpen2(!isOpen2);
    if (!isOpen2 && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  const handleClick = () => {
    const element = document.getElementById("section-signalisation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick2 = () => {
    const element = document.getElementById("section-intersection");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleOpen3 = () => {
    setIsOpen3(!isOpen3);
  };

  const handleClick3 = () => {
    const element = document.getElementById("section-circuler");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleOpen4 = () => {
    setIsOpen4(!isOpen4);
  };
  const handleClick4 = () => {
    const element = document.getElementById("section-Croiser");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const toggleOpen5 = () => {
    setIsOpen5(!isOpen5);
  };
  const handleClick5 = () => {
    const element = document.getElementById("section-vitesse");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleOpen6 = () => {
    setIsOpen6(!isOpen6);
  };

  const handleClick6 = () => {
    const element = document.getElementById("section-Stationner");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <div className="circulation-container">
      <header className="circulation-header">
        <h1 className="circulation-title">Circulation</h1>
        <p className="circulation-description">
          L'apprentissage du code de la route est segmenté en thématiques qui couvrent les principales questions pouvant se poser à un conducteur lorsqu'il prend le volant. Parmi ces thématiques figurent les <span className="bold-text">règles de la circulation routière</span>. Nous leur avons consacré un ensemble de cours structurés et méthodiques, pour vous permettre d'acquérir rapidement ces règles.
        </p>
        <button className="circulation-button">
          QUIZ <span className="arrow">→</span>
        </button>
      </header>

      {/* Ajout des éléments supplémentaires en dessous */}
      <div className="container mt-5">
        <div className="row">
          {/* Première colonne de cartes */}
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <a href='#'><h5 className="card-title" onClick={handleClick}>01 Comprendre la signalisation</h5></a>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
               <a href='#'><h5 className="card-title" onClick={handleClick3}>03 Circuler</h5></a>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <a href='#'><h5 className="card-title" onClick={handleClick5}>05 Gérer sa vitesse</h5></a>
              </div>
            </div>
          </div>
          {/* Deuxième colonne de cartes */}
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <a href='#'><h5 className="card-title" onClick={handleClick2}>02 Franchir une intersection</h5></a>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <a href='#'><h5 className="card-title" onClick={handleClick4}>04 Croiser et dépasser</h5></a>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
               <a href='#'><h5 className="card-title" onClick={handleClick6} >06 Stationner - S'arrêter</h5></a> 
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nouvelle section 1 */}
      <div className="container mt-3">
        <div id="section-signalisation" className="section-header bg-dark text-white p-3 mb-3 d-flex justify-content-between align-items-center">
          <h4 className="m-0">01 Comprendre la signalisation</h4>
          {/* Remplacement de '6 cours' par l'icône de flèche */}
          <span
            className="badge badge-light rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            onClick={toggleOpen}
          >
            {isOpen ? '▲' : '▼'}
          </span>
        </div>

        {isOpen && (
          <div className="container mt-3">
            <div className="list-group">
              {[
                'La lecture des panneaux',
                'Les types de panneaux',
                'Les bornes et les balises',
                'Le marquage au sol',
                'L’essentiel à retenir',
              ].map((item, index) => (
                <div
                  className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                  key={index}
                >
                  <span>{item}</span>
                  <span className="badge badge-primary rounded-pill">Cours</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
   {/* Nouvelle section 2 */}
   <div className="container mt-3">
        <div id="section-intersection" className="section-header bg-dark text-white p-3 mb-3 d-flex justify-content-between align-items-center">
          <h4 className="m-0" onClick={toggleOpen2} style={{ cursor: 'pointer' }}>02 Franchir une intersection</h4>
          <span
            className="badge badge-light rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            onClick={toggleOpen2}
          >
            {isOpen2 ? '▲' : '▼'}
          </span>
        </div>

        {isOpen2 && (
          <div className="container mt-3" ref={sectionRef}>
            <div className="list-group">
              {[
                'Les règles de priorité',
                'Les intersections complexes',
                'Les ronds-points',
                'Les feux tricolores',
                'L’essentiel à retenir',
              ].map((item, index) => (
                <div
                  className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                  key={index}
                >
                  <span>{item}</span>
                  <span className="badge badge-primary rounded-pill">Cours</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Nouvel Section 3 */}
      <div className="container mt-3">
        <div id="section-circuler" className="section-header bg-dark text-white p-3 mb-3 d-flex justify-content-between align-items-center">
          <h4 className="m-0">03 Circuler</h4>
          {/* Remplacement de '6 cours' par l'icône de flèche */}
          <span
            className="badge badge-light rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            onClick={toggleOpen3}
          >
            {isOpen ? '▲' : '▼'}
          </span>
        </div>

        {isOpen3 && (
          <div className="container mt-3">
            <div className="list-group">
              {[
                'Se placer sur la voie',
                'Changer de direction',
                'L’essentiel à retenir',
              ].map((item, index) => (
                <div
                  className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                  key={index}
                >
                  <span>{item}</span>
                  <span className="badge badge-primary rounded-pill">Cours</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Nouvel Section 4 */}
      <div className="container mt-3">
        <div id="section-Croiser" className="section-header bg-dark text-white p-3 mb-3 d-flex justify-content-between align-items-center">
          <h4 className="m-0">04 Croiser et dépasser</h4>
          {/* Remplacement de '6 cours' par l'icône de flèche */}
          <span
            className="badge badge-light rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            onClick={toggleOpen4}
          >
            {isOpen ? '▲' : '▼'}
          </span>
        </div>

        {isOpen4 && (
          <div className="container mt-3">
            <div className="list-group">
              {[
                'Se Croiser sur une route plane',
                'Changer de Se croiser en pente',
                'Depasser en toute securiter',
                'Les interdictions de depasser',
                'Les depassements difficiles',
                'Le depassement par la droite',
                'Etre depasser',
                'L’essentiel à retenir',
              ].map((item, index) => (
                <div
                  className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                  key={index}
                >
                  <span>{item}</span>
                  <span className="badge badge-primary rounded-pill">Cours</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Nouvelle section 5 */}
      <div className="container mt-3">
        <div id="section-vitesse" className="section-header bg-dark text-white p-3 mb-3 d-flex justify-content-between align-items-center">
          <h4 className="m-0">05 Gérer sa vitesse</h4>
          {/* Remplacement de '6 cours' par l'icône de flèche */}
          <span
            className="badge badge-light rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            onClick={toggleOpen5}
          >
            {isOpen ? '▲' : '▼'}
          </span>
        </div>

        {isOpen5 && (
          <div className="container mt-3">
            <div className="list-group">
              {[
                'La Signalisation et les Controles',
                'Les Consequences de la vitesse',
                'La Vitesse et les distances',
                'Le non-respect des limitations de vitesse',
                'Les limitations de vitesse',
                'L’essentiel à retenir',
              ].map((item, index) => (
                <div
                  className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                  key={index}
                >
                  <span>{item}</span>
                  <span className="badge badge-primary rounded-pill">Cours</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
 {/* Nouvelle section 6 */}
 <div className="container mt-3">
        <div id="section-Stationner" className="section-header bg-dark text-white p-3 mb-3 d-flex justify-content-between align-items-center">
          <h4 className="m-0">06 Stationner - S'arrêter</h4>
          {/* Remplacement de '6 cours' par l'icône de flèche */}
          <span
            className="badge badge-light rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            onClick={toggleOpen6}
          >
            {isOpen ? '▲' : '▼'}
          </span>
        </div>

        {isOpen6 && (
          <div className="container mt-3">
            <div className="list-group">
              {[
                'La Signalisation du Stationnement',
                'Les Types de stationnement reglemente',
                'Stationner en ville',
                'Stationner en ville',
                'Stationner hors agglomeration',
                'Les arrets et les stationnements interdits',
                'L’essentiel à retenir',
              ].map((item, index) => (
                <div
                  className="list-group-item list-group-item-action d-flex align-items-center justify-content-between"
                  key={index}
                >
                  <span>{item}</span>
                  <span className="badge badge-primary rounded-pill">Cours</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>


    </div>
  );
};

export default Circulation;
