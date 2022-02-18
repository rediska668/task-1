import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const myName = 'Sergey';

ReactDOM.render(< React.StrictMode >
  <App myName={myName} showred={false} />
</React.StrictMode>,
  document.getElementById('root')
);