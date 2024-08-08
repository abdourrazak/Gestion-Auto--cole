import React from 'react';
import './App.css'
//import Inscription from './Pages/Inscription/Inscription';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import TestCode from './Pages/TestCode/TestCode';
import Test from './Pages/Test/Test';
import AspectPage from './Pages/Aspect/AspectPage';
import Footer from './Pages/Footer/Footer';

const App: React.FC = () => {
  return (
    <div>
       <Header />
      <main className="content">
        <Home />
        <TestCode />
        <Test />
        <AspectPage />
        <Footer />
      </main> 
     {/*<Inscription /> */} 
    </div>
  );
}

export default App
