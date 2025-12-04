import type { AppThunk } from '../../redux/types';
import type { AccountAction, AccountState } from './types';

const initialBalanceState: AccountState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
    isLoading: false,
};

const accountReducer = (state = initialBalanceState, action: AccountAction) => {
    switch (action.type) {
        case 'account/deposit': {
            return {
                ...state,
                isLoading: false,
                balance: state.balance + action.payload,
            };
        }
        case 'account/withdraw': {
            return {
                ...state,
                balance: state.balance - action.payload,
            };
        }
        case 'account/requestLoan': {
            const hasLoan = state.loan > 0;
            if (hasLoan) return state;

            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount,
            };
        }
        case 'account/payLoan': {
            return {
                ...state,
                loan: 0,
                loanPurpose: '',
                balance: state.balance - state.loan,
            };
        }
        case 'account/convertingCurrency': {
            return {
                ...state,
                isLoading: true,
            };
        }
        default: {
            return state;
        }
    }
};

export const deposit = (
    amount: number,
    currency: string
): AccountAction | AppThunk<void> => {
    if (currency === 'USD') {
        return {
            type: 'account/deposit',
            payload: amount,
        };
    }

    return async (dispatch) => {
        dispatch({ type: 'account/convertingCurrency' });

        const res = await fetch(
            `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currency}&to=USD`
        );
        const data = await res.json();

        const convertedAmount = data.rates.USD;

        dispatch({
            type: 'account/deposit',
            payload: convertedAmount,
        });
    };
};

export const withdraw = (amount: number): AccountAction => {
    return {
        type: 'account/withdraw',
        payload: amount,
    };
};

export const requestLoan = (amount: number, purpose: string): AccountAction => {
    return {
        type: 'account/requestLoan',
        payload: {
            amount,
            purpose,
        },
    };
};

export const payLoan = (): AccountAction => {
    return { type: 'account/payLoan' };
};

export default accountReducer;
