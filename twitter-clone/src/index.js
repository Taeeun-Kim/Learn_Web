import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { authService } from 'fBase';
console.log(authService);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
