import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import overrideConsole from './lib/log.ts';

overrideConsole();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
