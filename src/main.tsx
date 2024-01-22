import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './../public/index.scss'

const appContainer = document.createElement('div');
appContainer.id = 'root';
document.body.appendChild(appContainer);

// Render your app inside the container
ReactDOM.createRoot(appContainer).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
