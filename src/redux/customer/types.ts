export type InitialCustomerState = {
    fullName: string;
    nationalId: string;
    createdAt: string;
};

export type CustomerAction =
    | {
          type: 'customer/createCustomer';
          payload: InitialCustomerState;
      }
    | {
          type: 'customer/updateName';
          payload: string;
      };
