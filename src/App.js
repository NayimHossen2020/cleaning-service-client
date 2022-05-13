import React from 'react';
import Navbar from './Shared/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <Navbar>
        <Home />
        <About />
        <Services />
        <Contact />
        <Login />
      </Navbar>
    </div>
  );
}

export default App;
