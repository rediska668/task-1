import logo from './logo.svg';
import './App.css';
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
          <textarea id="message-text" cols="25" rows="8"></textarea>
          <button className='message-button'>Отправка сообщения</button>
        </form>
      </header>
    </div >
  );
}


export default App;
