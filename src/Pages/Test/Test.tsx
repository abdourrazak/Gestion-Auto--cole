import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import './Test.css';
import codeDeLaRoute from './assets/pp_12.svg';
import motorway from './assets/pp_11.svg';
import exam from './assets/pp_09.svg';
import abs from './assets/pp_07.svg';

const Test: React.FC = () => {
  const animationConfig = {
    opacity: 1,
    transform: 'translateY(0)',
    config: { duration: 2000 }, // slower animation
  };

  const initialConfig = {
    opacity: 0,
    transform: 'translateY(50px)',
  };

  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.1 });

  const imgAnimation1 = useSpring(inView1 ? animationConfig : initialConfig);
  const titleAnimation1 = useSpring(inView1 ? { ...animationConfig, delay: 2000 } : initialConfig);
  const textAnimation1 = useSpring(inView1 ? { ...animationConfig, delay: 4000 } : initialConfig);

  const imgAnimation2 = useSpring(inView2 ? animationConfig : initialConfig);
  const titleAnimation2 = useSpring(inView2 ? { ...animationConfig, delay: 2000 } : initialConfig);
  const textAnimation2 = useSpring(inView2 ? { ...animationConfig, delay: 4000 } : initialConfig);

  const imgAnimation3 = useSpring(inView3 ? animationConfig : initialConfig);
  const titleAnimation3 = useSpring(inView3 ? { ...animationConfig, delay: 2000 } : initialConfig);
  const textAnimation3 = useSpring(inView3 ? { ...animationConfig, delay: 4000 } : initialConfig);

  const imgAnimation4 = useSpring(inView4 ? animationConfig : initialConfig);
  const titleAnimation4 = useSpring(inView4 ? { ...animationConfig, delay: 2000 } : initialConfig);
  const textAnimation4 = useSpring(inView4 ? { ...animationConfig, delay: 4000 } : initialConfig);

  return (
    <div className="test-container">
      <h2 className="Titre">Plusieurs types de tests</h2>
      <div className="test-grid">
        <div className="test-item" ref={ref1}>
          <animated.img src={codeDeLaRoute} alt="Tests séries" style={imgAnimation1} />
          <animated.h3 style={titleAnimation1}>Tests séries</animated.h3>
          <animated.p style={textAnimation1}>Des séries de 20 questions pour vous entraîner à tout moment</animated.p>
        </div>
        <div className="test-item" ref={ref2}>
          <animated.img src={motorway} alt="Tests Thématiques" style={imgAnimation2} />
          <animated.h3 style={titleAnimation2}>Tests Thématiques</animated.h3>
          <animated.p style={textAnimation2}>Triez vos questions par thème pour mieux cibler vos points faibles</animated.p>
        </div>
        <div className="test-item" ref={ref3}>
          <animated.img src={exam} alt="Examens blancs" style={imgAnimation3} />
          <animated.h3 style={titleAnimation3}>Examens blancs</animated.h3>
          <animated.p style={textAnimation3}>Entraînez-vous dans les conditions de l’examen pour être sûr(e) de réussir</animated.p>
        </div>
        <div className="test-item" ref={ref4}>
          <animated.img src={abs} alt="Questions orales" style={imgAnimation4} />
          <animated.h3 style={titleAnimation4}>Questions orales</animated.h3>
          <animated.p style={textAnimation4}>Préparez-vous aux questions orales du permis de conduire avec nos cas pratiques</animated.p>
        </div>
      </div>
    </div>
  );
};

export default Test;
