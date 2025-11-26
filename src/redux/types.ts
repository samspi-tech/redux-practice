export type InitialBalanceState = {
    balance: number;
    loan: number;
    loanPurpose: string;
};

export type BalanceAction =
    | {
          type: 'balance/deposit' | 'balance/withdraw';
          payload: number;
      }
    | {
          type: 'balance/requestLoan';
          payload: {
              purpose: string;
              amount: number;
          };
      }
    | { type: 'balance/payLoan' };
