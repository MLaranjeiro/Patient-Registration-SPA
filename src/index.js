import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import AppRouter from './Router'; // Import the Router component
import reportWebVitals from './reportWebVitals';
import logo from './images/hhsclogo.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter/>
    <div className="footer-image">
      <img src={logo} alt="Logo" />
    </div>   
  </React.StrictMode>
);

reportWebVitals();