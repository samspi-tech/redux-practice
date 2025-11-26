import type { BalanceAction, InitialBalanceState } from './types';

const initialBalanceState: InitialBalanceState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
};

const balanceReducer = (state = initialBalanceState, action: BalanceAction) => {
    switch (action.type) {
        case 'balance/deposit': {
            return {
                ...state,
                balance: state.balance + action.payload,
            };
        }
        case 'balance/withdraw': {
            return {
                ...state,
                balance: state.balance - action.payload,
            };
        }
        case 'balance/requestLoan': {
            const hasLoan = state.loan > 0;
            if (hasLoan) return state;

            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount,
            };
        }
        case 'balance/payLoan': {
            return {
                ...state,
                loan: 0,
                loanPurpose: '',
                balance: state.balance - state.loan,
            };
        }
        default: {
            return state;
        }
    }
};

export { initialBalanceState, balanceReducer };
