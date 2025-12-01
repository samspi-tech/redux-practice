import { createStore } from 'redux';
import {
    deposit,
    payLoan,
    requestLoan,
    withdraw,
} from './account/accountActions';
import { rootReducer } from './rootReducer';
import { createCustomer, updateName } from './customer/customerActions';

const store = createStore(rootReducer);

store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(50));
console.log(store.getState());

store.dispatch(requestLoan(1000, 'Buy new CPU'));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

store.dispatch(createCustomer('Mario Rossi', 'ABC123'));
console.log(store.getState());

store.dispatch(updateName('Luigi Verdi'));
console.log(store.getState());
