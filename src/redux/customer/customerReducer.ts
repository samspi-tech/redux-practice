import type { CustomerAction, InitialCustomerState } from './types';

const initialCustomerState: InitialCustomerState = {
    fullName: '',
    nationalId: '',
    createdAt: '',
};

export const customerReducer = (
    state = initialCustomerState,
    action: CustomerAction
) => {
    switch (action.type) {
        case 'customer/createCustomer': {
            return {
                ...state,
                fullName: action.payload.fullName,
                nationalId: action.payload.nationalId,
                createdAt: action.payload.createdAt,
            };
        }
        case 'customer/updateName': {
            return {
                ...state,
                fullName: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
