import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Routes from './Routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Routes />,
  </React.StrictMode>
);
