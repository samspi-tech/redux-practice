import { useSelector } from 'react-redux';
import type { RootState } from '../../utils/types';

const Customer = () => {
    const customer = useSelector((store: RootState) => store.customer);

    return <h2>👋 Welcome, {customer.fullName}</h2>;
};

export default Customer;
