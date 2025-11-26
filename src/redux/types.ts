export type InitialBalanceState = {
    balance: number;
    loan: number;
    loanPurpose: string;
};

export type BalanceAction = {
    type: 'balance/deposit' | 'balance/withdraw';
    payload: number;
};
