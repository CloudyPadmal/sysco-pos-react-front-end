import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootreducer';

const initialState = {};
const middleWare = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    /* composeWithDevTools(
        applyMiddleware(...middleWare)
    ) */
    compose(applyMiddleware(...middleWare))
);

export default store;