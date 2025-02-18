import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import AppRouter from './Router'; // Import the Router component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter/>   
  </React.StrictMode>
);

reportWebVitals();