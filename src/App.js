import './App.css';
import HomePage from "./views/home-page";
// redux
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import store from "./store/store.js";

// global
import "./const/global-methods.js";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <HomePage/>
            </Provider>
        </div>
    );
}

export default App;