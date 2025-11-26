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
        default: {
            return state;
        }
    }
};

export { initialBalanceState, balanceReducer };
