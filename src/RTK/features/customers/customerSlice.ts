import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CustomerState, CreateCustomer } from './types';

const initialState: CustomerState = {
    fullName: '',
    nationalId: '',
    createdAt: '',
};

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        createCustomer: (state, action: PayloadAction<CreateCustomer>) => {
            state.fullName = action.payload.fullName;
            state.nationalId = action.payload.nationalId;
            state.createdAt = new Date().toISOString();
        },
        updateCustomer: (state, action: PayloadAction<string>) => {
            state.fullName = action.payload;
        },
    },
});

export const { createCustomer, updateCustomer } = customerSlice.actions;

export default customerSlice.reducer;
