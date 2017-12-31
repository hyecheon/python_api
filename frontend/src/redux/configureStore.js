import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import users from 'redux/modules/users'


const middleware = [thunk];

const reducer = combineReducers({
    users,
});

let store = initialState => createStore(reducer, applyMiddleware(...middleware));

export default store();
