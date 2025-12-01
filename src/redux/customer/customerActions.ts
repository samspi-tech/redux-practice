import type { CustomerAction } from './types';

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
