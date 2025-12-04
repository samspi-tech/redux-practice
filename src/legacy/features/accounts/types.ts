export type AccountState = {
    balance: number;
    loan: number;
    loanPurpose: string;
    isConverting: boolean;
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
    | {
          type: 'account/payLoan';
      }
    | {
          type: 'account/convertingCurrency';
      };
