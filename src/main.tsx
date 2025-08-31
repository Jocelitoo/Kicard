import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import { RoutesFunction } from './routes/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesFunction />
    </BrowserRouter>
  </React.StrictMode>,
);
