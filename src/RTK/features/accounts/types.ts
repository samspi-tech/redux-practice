export type AccountState = {
    balance: number;
    loan: number;
    loanPurpose: string;
    isConverting: boolean;
};

export type RequestLoan = {
    amount: number;
    loanPurpose: string;
};
