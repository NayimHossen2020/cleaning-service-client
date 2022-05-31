import React, { useEffect } from 'react';
import Navbar from './Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import publicRoute from './Routes/publicRoute';
import AOS from 'aos';
import 'aos/dist/aos.css';
import RequireAuth from './Authentication/RequireAuth';
import privateRoutes from './Routes/privateRoutes';
import AdminRoute from './Authentication/AdminRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddAdmin from './Pages/Dashboard/AddAdmin';
import AddService from './Pages/Dashboard/AddService';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
      <Navbar>
        <Routes>
          {
            publicRoute.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />}></Route>)
          }
          <Route element={<RequireAuth />}>
            {
              privateRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />}></Route>)
            }
          </Route>
          <Route element={<AdminRoute />}>
            <Route path='/dashboard' element={<Dashboard />} >
              <Route path='add-service' element={<AddService />} />
              <Route path='add-admin' element={<AddAdmin />} />
            </Route>
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
