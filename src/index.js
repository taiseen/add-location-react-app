import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PlaceContextProvider } from './context/PlaceContext';
import { FavoriteContextProvider } from './context/FavoriteContext';


ReactDOM.render(
  <React.StrictMode>
    <FavoriteContextProvider>
      <PlaceContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PlaceContextProvider>
    </FavoriteContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);