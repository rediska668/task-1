import './App.scss';
import App from './App';

function Message(props) {
    return (
        <div>
            <header className='message'>
                Component
                <h3> {props.myComponent}</h3>
                <h2>{props.appcomp}</h2>
            </header>
        </div>

    );
}

export default Message;