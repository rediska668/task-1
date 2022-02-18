import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Message from "./message";
import reportWebVitals from './reportWebVitals';


const myName = 'Sergey';
const mycomponent = "message ";

ReactDOM.render(< React.StrictMode >
  <App myName={myName} showred={false} />
  <Message myComponent={mycomponent} />
</React.StrictMode>,
  document.getElementById('root')
);

