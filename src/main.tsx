import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import './assets/styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import { RoutesFunction } from './routes/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}

    <BrowserRouter>
    <RoutesFunction/>
    </BrowserRouter>
  </React.StrictMode>,
);
