import type { CustomerAction, CustomerState } from './types';

const initialCustomerState: CustomerState = {
    fullName: '',
    nationalId: '',
    createdAt: '',
};

const customerReducer = (
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

export const createCustomer = (
    fullName: string,
    nationalId: string
): CustomerAction => {
    return {
        type: 'customer/createCustomer',
        payload: {
            fullName,
            nationalId,
            createdAt: new Date().toISOString(),
        },
    };
};

export const updateName = (fullName: string): CustomerAction => {
    return {
        type: 'customer/updateName',
        payload: fullName,
    };
};

export default customerReducer;
