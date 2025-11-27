import type { AccountAction } from './types';

export const deposit = (amount: number): AccountAction => {
    return {
        type: 'account/deposit',
        payload: amount,
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
