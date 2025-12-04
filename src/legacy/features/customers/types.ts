export type CustomerState = {
    fullName: string;
    nationalId: string;
    createdAt: string;
};

export type CustomerAction =
    | {
          type: 'customer/createCustomer';
          payload: CustomerState;
      }
    | {
          type: 'customer/updateName';
          payload: string;
      };
