import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import users from 'redux/modules/users'


const env = process.env.NODE_ENV;

const middleware = [thunk];

if (env === 'development') {
    const {logger} = require('redux-logger');
    middleware.push(logger);
}

const reducer = combineReducers({
    users,
});

let store = initialState =>
    createStore(reducer, applyMiddleware(...middleware));

export default store();
