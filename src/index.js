import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.min.css';
import './index.css';
import TestApp from './TestApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TestApp />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
