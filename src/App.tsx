import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import TestCode from './Pages/TestCode/TestCode';
import Test from './Pages/Test/Test';
import AspectPage from './Pages/Aspect/AspectPage';
import Footer from './Pages/Footer/Footer';
import Inscription from './Pages/Inscription/Inscription';
import Connexion from './Pages/Connexion/Connexion';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <main className="content">
              <Header />
              <Home />
              <TestCode />
              <Test />
              <AspectPage />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/Connexion"   element={<Connexion />} />
      </Routes>
    </Router>
  );
}

export default App;
