export interface CreateCustomer {
    fullName: string;
    nationalId: string;
}

export interface CustomerState extends CreateCustomer {
    createdAt: string;
}
