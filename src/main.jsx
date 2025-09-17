import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { WatchlistProvider } from './context/WatchlistContext'; // Import the provider
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WatchlistProvider> {/* Wrap the app with the provider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WatchlistProvider>
  </React.StrictMode>,
);