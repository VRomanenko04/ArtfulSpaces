import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { FormContextProvider } from "./context/FormContext";
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FormContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormContextProvider>
  </React.StrictMode>,
)
