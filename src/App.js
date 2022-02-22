import logo from './logo.svg';
import './App.scss';
import Message from "./Message";
import Counter from "./Counter";
import React, { useState } from 'react';

function App(props) {
  const [messageList, setmessageList] = useState(
    [{
      text: "text",
      autor: "Me"
    },
    {
      text: "",
      autor: "bot"
    }]);


  return (
    <div>
      <header className={`App-header ${props.showred ? "header-red" : "header-blue"}`}>
        SUPER puper app!
        <h3>My name : {props.myName}</h3>
        <Counter />
        <Message name={'props message'} />
      </header>
    </div >
  );
}



export default App;
