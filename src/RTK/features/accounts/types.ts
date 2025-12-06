export interface RequestLoan {
    loan: number;
    loanPurpose: string;
}

export interface AccountState extends RequestLoan {
    balance: number;
    isConverting: boolean;
}
