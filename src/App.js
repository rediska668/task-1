import logo from './logo.svg';
import './App.scss';

function App(props) {



  return (
    <div>
      <header
        className={`App-header ${props.showred ? "header-red" : "header-blue"}`}
        style={{ top: props.Position?.map() || '10px' }}>
        My SUPER puper app!
        <h3>Hello {props.myName}</h3>
      </header>
    </div >
  );
}

export default App;
