import { useAppSelector } from '../../redux/hooks';

const Customer = () => {
    const customer = useAppSelector((state) => state.customer);

    return <h2>👋 Welcome, {customer.fullName}</h2>;
};

export default Customer;
