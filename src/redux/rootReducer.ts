import { combineReducers } from 'redux';
import { accountReducer } from './account/accountReducer';
import { customerReducer } from './customer/customerReducer';

export const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});
