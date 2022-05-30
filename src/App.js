import React, { useEffect } from 'react';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import publicRoute from './Routes/publicRoute';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }) => <Route path={path} element={<Component />}></Route>)
          }
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
