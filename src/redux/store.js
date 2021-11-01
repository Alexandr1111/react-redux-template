import {combineReducers, compose, createStore} from "redux";
// import authReducer from "./auth-reducer";

let reducers = combineReducers({
    // auth: authReducer
})

// redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;