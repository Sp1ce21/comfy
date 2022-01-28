import { applyMiddleware, combineReducers, createStore } from "redux";
import productsReducer from "./products-reducer";
import thunkMiddleware from 'redux-thunk';
// import {reducer as formReducer} from 'redux-form';

let rootReducer = combineReducers({
    productsPage: productsReducer,
    // form: formReducer,
})

type rootReducerType = typeof rootReducer;
export type appStateType = ReturnType<rootReducerType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppDispatch = typeof store.dispatch

export default store;