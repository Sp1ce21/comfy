import { applyMiddleware, combineReducers, createStore } from "redux";
import productsReducer from "./products-reducer";
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth-reducer'
import {reducer as formReducer} from 'redux-form';

let rootReducer = combineReducers({
    productsPage: productsReducer,
    authPage: authReducer,
    form: formReducer,
})

type rootReducerType = typeof rootReducer;
export type appStateType = ReturnType<rootReducerType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppDispatch = typeof store.dispatch

export default store;