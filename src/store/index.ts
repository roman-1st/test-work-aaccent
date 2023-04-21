import thunk from 'redux-thunk';
import { rootReducer } from './reducer/index';
import { applyMiddleware, legacy_createStore } from "redux";


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))