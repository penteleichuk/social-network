import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import App from './App';
import {addPost, subscribe, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import state from "./redux/state";
import './index.css';

const renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>
        , document.getElementById('root'));
}

renderEntireTree(state);
subscribe(renderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
