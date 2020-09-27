import React from 'react';
import { Navbar, Header, About, Slider, CTA, Footer } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <About/>
     <Slider/>
     <CTA/>
     <Footer/>
    </div>
  );
}

export default App;