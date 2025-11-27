import type { BalanceAction } from './types';

export const deposit = (amount: number): BalanceAction => {
    return {
        type: 'balance/deposit',
        payload: amount,
    };
};

export const withdraw = (amount: number): BalanceAction => {
    return {
        type: 'balance/withdraw',
        payload: amount,
    };
};

export const requestLoan = (amount: number, purpose: string): BalanceAction => {
    return {
        type: 'balance/requestLoan',
        payload: {
            amount,
            purpose,
        },
    };
};

export const payLoan = (): BalanceAction => {
    return { type: 'balance/payLoan' };
};
