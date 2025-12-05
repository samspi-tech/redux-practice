import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { AccountState, RequestLoan } from './types';
import type { RootState } from '../../redux/types';

const initialState: AccountState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
    isConverting: false,
};

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        deposit: (state, action: PayloadAction<number>) => {
            state.balance += action.payload;
        },
        withdraw: (state, action: PayloadAction<number>) => {
            state.balance -= action.payload;
        },
        requestLoan: (state, action: PayloadAction<RequestLoan>) => {
            const hasLoan = state.loan > 0;
            if (hasLoan) return;

            state.loan = action.payload.amount;
            state.loanPurpose = action.payload.loanPurpose;
            state.balance += action.payload.amount;
        },
        payLoan: (state) => {
            state.balance -= state.loan;
            state.loan = 0;
            state.loanPurpose = '';
        },
        convertingCurrency: (state) => {
            state.isConverting = true;
        },
    },
});

export const { deposit, withdraw, requestLoan, payLoan, convertingCurrency } =
    accountSlice.actions;

export const selectAccount = (state: RootState) => state.account;

export default accountSlice.reducer;
