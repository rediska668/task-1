import logo from './logo.svg';
import './App.scss';
import Message from "./Message";
import MessageList from "./MessageList";
import Counter from "./Counter";
import React, { useState } from 'react';

function App(props) {


  return (
    <div>
      <header className={`App-header ${props.showred ? "header-red" : "header-blue"}`}>
        SUPER puper app!
        <h3>My name : {props.myName}</h3>
        <Counter />
        <Message name={'props message'} />
        <MessageList />
        <form action="#" className='Message-List'>
          <textarea id="" cols="30" rows="8"></textarea>
          <button>Отправка сообщения</button>
        </form>
      </header>
    </div >
  );
}


export default App;
