import {
    createAsyncThunk,
    createSlice,
    type PayloadAction,
} from '@reduxjs/toolkit';
import type { AccountState, RequestLoan } from './types';

const initialState: AccountState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
    isConverting: false,
};

export const fetchConvertedCurrency = createAsyncThunk(
    'account/fetchConvertedCurrency',
    async ({ amount, currency }: { amount: number; currency: string }) => {
        const res = await fetch(
            `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currency}&to=USD`
        );
        const data = await res.json();

        return data.rates.USD as number;
    }
);

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

            state.loan = action.payload.loan;
            state.loanPurpose = action.payload.loanPurpose;
            state.balance += action.payload.loan;
        },
        payLoan: (state) => {
            state.balance -= state.loan;
            state.loan = 0;
            state.loanPurpose = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchConvertedCurrency.pending, (state) => {
                state.isConverting = true;
            })
            .addCase(
                fetchConvertedCurrency.fulfilled,
                (state, action: PayloadAction<number>) => {
                    state.isConverting = false;
                    state.balance += action.payload;
                }
            );
    },
});

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;

export default accountSlice.reducer;
