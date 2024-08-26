import React from 'react';
import './Lecture_des_panneaux.css'; // fichier CSS spécifique pour ce composant
import img from './Img/Img.png'
import Img1 from './Img/Img1.png'
import Img2 from './Img/Img2.png'
import Img4 from './Img/Img4.png'
import img5 from './Img/Img5.png'
import image1 from './Img/50m.png'
import image2 from './Img/150m.png'
import image3 from './Img/Camion.png'


const LectureDesPanneaux = () => {
  return (
    <div className="lecture-des-panneaux-container">
      <div className="breadcrumb-container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Auto</a></li>
            <li className="breadcrumb-item"><a href="#">Thématiques auto</a></li>
            <li className="breadcrumb-item"><a href="#">Circulation auto</a></li>
            <li className="breadcrumb-item active" aria-current="page">La lecture des panneaux</li>
          </ol>
        </nav>
      </div>

      <div className="header-container">
        <h1>La lecture des panneaux</h1>
      </div>

      <div className="content-container">
        <button className="signal-button"><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="tw-mr-1" width="20" height="20">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"></path>
        </svg></span>Signaler</button>
        <div className="text-section mt-4">
          <p className="text-center">
            La bonne lecture des panneaux de signalisation permet de comprendre la nature et l'importance de l'information sur les routes. Comment les distingue-t-on ? Plus d'infos sur superCode !
          </p>
          <p className="text-center">
            Un panneau se reconnaît à sa forme et à sa couleur.
          </p>
          <p className="text-center">
            La bonne lecture des panneaux de signalisation routière permet de comprendre la nature et l'importance de l'information.
          </p>
        </div>
      </div>

      <div className="section-signals">
        <h3 className="text-danger">A. La forme des panneaux</h3>
        <p>
          Il faut tout d'abord distinguer la forme des panneaux. <br />
          Chaque forme représente une fonction spécifique.
        </p>
        <ul>
          <li><strong>Carré :</strong> l'indication</li>
          <li><strong>Rectangle :</strong> la localisation</li>
          <li><strong>Rectangle biseauté :</strong> la direction</li>
          <li><strong>Triangle :</strong> le danger ou l'intersection</li>
          <li><strong>Rond :</strong> l'obligation ou l'interdiction</li>
        </ul>

        <h3 className="text-danger">B. La couleur des panneaux de signalisation</h3>
        <p>
          Il faut repérer la couleur des panneaux.<br />
          Chaque couleur a une signification particulière.
        </p>
        <ul>
          <li><strong>Bleu :</strong> l'obligation ou l'indication</li>
          <li><strong>Rouge :</strong> l'interdiction ou le danger</li>
          <li><strong>Vert :</strong> la direction</li>
          <li><strong>Jaune :</strong> les panneaux temporaires</li>
          <li><strong>Marron :</strong> les lieux touristiques</li>
        </ul>
      </div>

      {/* Section icone */}
      <div className="section-icons">
        <div className="icon-container">
          <img src={img} alt="Triangle Icon" className="icon" />
        </div>
        <div className="icon-container">
          <img src={Img1} alt="No Entry Icon" className="icon" />
        </div>
        <div className="icon-container">
          <img src={Img2} alt="Straight Icon" className="icon" />
        </div>
        <div className="icon-container">
          <img src={Img4} alt="Panneaux Icon" className="icon" />
        </div>
        <div className="icon-container">
          <img src={img5} alt="Panneaux Icon" className="icon" />
        </div>
        <h3 className="text-danger">C. Les panonceaux</h3>
        <p>
          Les panonceaux sont toujours positionnés sous les panneaux et donnent des indications supplémentaires sur la signification de ces derniers.
        </p>
      </div>

      {/* Nouvelle section à ajouter */}
      <div className="panneaux-section mt-4">
        <ul>
          <li>
            <span className="label">Les panonceaux de distance : </span>
            Le panneau prend effet à la distance indiquée par le panonceau.
            <div className="panonceau">
              <img src={image1} alt="50m" className="panonceau-image" />
            </div>
          </li>
          <li>
            <span className="label">Le panneau s'applique sur la distance indiquée par le panonceau. </span>
            <div className="panonceau">
              <img src={image2} alt="50m arrow" className="panonceau-image" />
            </div>
          </li>
          <li>
            <span className="label">Les panonceaux de catégorie : </span>
            Le panneau ne concerne que certaines catégories de véhicules.
            <div className="panonceau">
              <img src={image3} alt="vehicle" className="panonceau-image" />
            </div>
          </li>
        </ul>

        {/* Section en bas à droite */}
        <div className="next-lesson">
          <a href="#" className="next-lesson-link t-md">Leçon suivante <span className="arrow-right">→</span></a>
        </div>
      </div>


    </div>
  );
}

export default LectureDesPanneaux;
