import CreateCustomer from './RTK/features/customers/CreateCustomer';
import Customer from './RTK/features/customers/Customer';
import AccountOperations from './RTK/features/accounts/AccountOperations';
import BalanceDisplay from './RTK/features/accounts/BalanceDisplay';
import { useAppSelector } from './RTK/redux/hooks';

const App = () => {
    const customerFullName = useAppSelector((state) => state.customer.fullName);

    const hasCustomer = customerFullName !== '';

    return (
        <div>
            <h1>🏦 The React-Redux Bank ⚛️</h1>
            {!hasCustomer && <CreateCustomer />}
            {hasCustomer && (
                <>
                    <Customer />
                    <AccountOperations />
                    <BalanceDisplay />
                </>
            )}
        </div>
    );
};

export default App;
