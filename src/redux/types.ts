export type InitialAccountState = {
    balance: number;
    loan: number;
    loanPurpose: string;
};

export type AccountAction =
    | {
          type: 'account/deposit' | 'account/withdraw';
          payload: number;
      }
    | {
          type: 'account/requestLoan';
          payload: {
              purpose: string;
              amount: number;
          };
      }
    | { type: 'account/payLoan' };
