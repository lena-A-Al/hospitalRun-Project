import 'antd/dist/antd.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Main } from './core/Main';
import { Home } from './components/Home';
import { PatientInfo } from './components/PatientInfo';
import { appPathNames } from './common/utils/NavUtil';
import { Appointments } from './components/Appointments';
import { PrimaryCareDoctor } from './components/PrimaryCareDoctor';
import React from 'react';
import { Privacy } from './components/Privacy';
import { Medications } from './components/Medications';
import { HealingImage } from './components/HealingImage';

const App = () => {
  return (
    <>
      {/* <div style={{ height: '100%' }}> */}
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route
            path={appPathNames.patientInformation}
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <PatientInfo />
              </React.Suspense>
            }
          />
          <Route
            path={`${appPathNames.primaryCareDoctor}`}
            element={<PrimaryCareDoctor />}
          />
          <Route
            path={`${appPathNames.medications}`}
            element={<Medications />}
          />
          <Route
            path={`${appPathNames.appointments}`}
            element={<Appointments />}
          />
          <Route path={`${appPathNames.privacy}`} element={<Privacy />} />
          <Route path={`${appPathNames.healingImage}`} element={<HealingImage />} />
        </Route>
      </Routes>
      {/* </div> */}
    </>
  );
};

export default App;
