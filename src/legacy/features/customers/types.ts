export type CustomerState = {
    fullName: string;
    nationalId: string;
    createdAt: string;
};

type NewCustomer = CustomerState;

export type CustomerAction =
    | {
          type: 'customer/createCustomer';
          payload: NewCustomer;
      }
    | {
          type: 'customer/updateName';
          payload: string;
      };
