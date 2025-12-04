import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
} from 'redux';
import accountReducer from '../features/accounts/accountSlice';
import customerReducer from '../features/customers/customerSlice';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducers = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});

const middlewareEnhancer = applyMiddleware(thunk);
const composedEnhancer = composeWithDevTools(middlewareEnhancer);

const store = createStore(rootReducers, undefined, composedEnhancer);

export default store;
