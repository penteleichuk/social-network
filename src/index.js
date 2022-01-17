import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";
import {store} from "./redux/redux-store";
import './index.css';

const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState();
    renderEntireTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
