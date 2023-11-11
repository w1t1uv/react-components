import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { PokemonProvider } from './PokemonContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary fallback={<p className="error">Something went wrong :/</p>}>
        <PokemonProvider>
          <App />
        </PokemonProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
