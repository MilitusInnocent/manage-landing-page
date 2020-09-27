import React from 'react';
import { Navbar, Header, About, CTA, Footer } from './components';

const App = () => {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <About/>
     <CTA/>
     <Footer/>
    </div>
  );
}

export default App;