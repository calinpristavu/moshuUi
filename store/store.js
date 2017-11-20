import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import {ProductReducer} from "./reducers/ProductReducer";
import {CategoryReducer} from "./reducers/CategoryReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    combineReducers({
        products: ProductReducer,
        categories: CategoryReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
)