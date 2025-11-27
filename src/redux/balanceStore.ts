import { createStore } from 'redux';
import { balanceReducer } from './balanceReducer';
import { deposit, payLoan, requestLoan, withdraw } from './balanceActions';

const store = createStore(balanceReducer);

store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(50));
console.log(store.getState());

store.dispatch(requestLoan(1000, 'Buy new CPU'));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());
