
import { createStore, combineReducers, applyMiddleware } from "redux";
import { playerReducer } from './containers/player/reducer';

import thunk from 'redux-thunk';


const reducers = combineReducers({
    playerReducer: playerReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;