import type { AccountAction, InitialAccountState } from './types';

const initialBalanceState: InitialAccountState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
};

export const accountReducer = (
    state = initialBalanceState,
    action: AccountAction
) => {
    switch (action.type) {
        case 'account/deposit': {
            return {
                ...state,
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
        default: {
            return state;
        }
    }
};
