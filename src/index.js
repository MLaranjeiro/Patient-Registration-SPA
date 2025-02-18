import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/styles.css';
import AppRouter from './Router'; // Import the Router component
import reportWebVitals from './testing/reportWebVitals';
import logo from './images/hhsclogo.png';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppRouter/>
    <div className="footer-image">
      <img src={logo} alt="Logo" />
    </div>   
  </React.StrictMode>
);

reportWebVitals();