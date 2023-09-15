import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FormContextProvider } from "./context/FormContext";
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormContextProvider>
      <BrowserRouter basename={process.env.NODE_ENV==='production' ? '/ArtfulSpaces' : '/'}>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </FormContextProvider>
  </React.StrictMode>,
)
