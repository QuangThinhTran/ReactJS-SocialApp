import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './../public/index.scss'

// Create a container element for your app
const appContainer = document.createElement('div');
appContainer.id = 'root'; // Give it an ID or select an existing element by ID
document.body.appendChild(appContainer);

// Render your app inside the container
ReactDOM.createRoot(appContainer).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);