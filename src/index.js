import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import AppProvider from './Providers/Provider';

render(
  <AppProvider >
    <App />
  </AppProvider>,
  document.getElementById('root')
);
