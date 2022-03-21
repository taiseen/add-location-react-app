import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import PlaceContextProvider from './context/PlaceContext';


ReactDOM.render(
  <React.StrictMode>
    <PlaceContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PlaceContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);