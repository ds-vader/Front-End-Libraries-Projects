import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import quoteReducer from './quote-reducer'

const reducers = combineReducers({
    quotePage: quoteReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;