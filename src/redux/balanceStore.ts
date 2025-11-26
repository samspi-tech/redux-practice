import { createStore } from 'redux';
import { balanceReducer } from './balanceReducer';

const store = createStore(balanceReducer);

store.dispatch({ type: 'balance/deposit', payload: 500 });
console.log(store.getState());

store.dispatch({ type: 'balance/withdraw', payload: 250 });
console.log(store.getState());

store.dispatch({
    type: 'balance/requestLoan',
    payload: { amount: 1000, purpose: 'Buy brand new CPU' },
});
console.log(store.getState());

store.dispatch({ type: 'balance/payLoan' });
console.log(store.getState());
