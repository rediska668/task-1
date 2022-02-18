import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.scss';
import Message from "./message";

const appcomp = "render is app";

ReactDOM.render(< React.StrictMode >
  <Message appcomp={appcomp} />
</React.StrictMode>,
  document.getElementById('root')
);

function App(props) {

  return (
    <div>
      <header>

        <h3>Hello {props.myName}</h3>
      </header>
      <Message />
    </div >
  );
}



export default App;
