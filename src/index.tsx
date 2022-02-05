import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {store} from "./redux/redux-store";
import reportWebVitals from './reportWebVitals';
import {App} from './App';
import './index.css';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>, document.getElementById('root')
);

reportWebVitals();
