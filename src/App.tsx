import CreateCustomer from './features/customers/CreateCustomer';
import Customer from './features/customers/Customer';
import AccountOperations from './features/accounts/AccountOperations';
import BalanceDisplay from './features/accounts/BalanceDisplay';
import { useAppSelector } from './redux/hooks';

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
