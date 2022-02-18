import logo from './logo.svg';
import './App.scss';
import Message from "./Message";

function App(props) {

  return (
    <div>
      <header className='header-blue'>
        SUPER puper app!
        <h3>Hello {props.myName}</h3>
      </header>
      <Message name={'props message'} />
    </div >
  );
}



export default App;
