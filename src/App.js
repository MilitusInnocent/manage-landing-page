import React from 'react';
import { Navbar, Header, About,  CTA } from './components';

const App = () => {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <About/>
     <CTA/>
    </div>
  );
}

export default App;