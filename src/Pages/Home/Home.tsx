import React from 'react';
import './Home.css';
import roadIcon from './assets/code-de-la-route.svg';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const Home: React.FC = () => {
  const animationConfig = {
    opacity: 1,
    transform: 'translateY(0)',
    config: { duration: 2000 }, // slower animation
  };

  const initialConfig = {
    opacity: 0,
    transform: 'translateY(50px)',
  };

  const [ref, inView] = useInView({
    triggerOnce: false, // Animation will repeat
    threshold: 0.1,
  });

  const imgAnimation = useSpring(inView ? animationConfig : initialConfig);
  const titleAnimation = useSpring(inView ? { ...animationConfig, delay: 2000 } : initialConfig);
  const textAnimation = useSpring(inView ? { ...animationConfig, delay: 4000 } : initialConfig);
  const buttonAnimation = useSpring(inView ? { ...animationConfig, delay: 6000 } : initialConfig);

  return (
    <div ref={ref} className="formation-container">
      <animated.img
        src={roadIcon}
        alt="Traffic Light"
        className="formation-image"
        style={imgAnimation}
      />
      <animated.h1 className="formation-title" style={titleAnimation}>
        Une formation complète<br />
        au code de la route
      </animated.h1>
      <animated.p className="formation-description" style={textAnimation}>
        Tous nos contenus disponibles<br />
        en illimité pour vous garantir la réussite<br />
        à l’examen du code !
      </animated.p>
      <animated.button className="inscription-button" style={buttonAnimation}>
        S’inscrire gratuitement
      </animated.button>
    </div>
  );
};

export default Home;
