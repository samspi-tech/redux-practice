import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
    deposit,
    fetchConvertedCurrency,
    payLoan,
    requestLoan,
    withdraw,
} from './accountSlice';

const AccountOperations = () => {
    const dispatch = useAppDispatch();

    const {
        loan: currLoan,
        loanPurpose: currLoanPurpose,
        isConverting,
    } = useAppSelector((state) => state.account);

    const [currency, setCurrency] = useState('USD');
    const [loanAmount, setLoanAmount] = useState('');
    const [loanPurpose, setLoanPurpose] = useState('');
    const [depositAmount, setDepositAmount] = useState('');
    const [withdrawalAmount, setWithdrawalAmount] = useState('');

    const handleDeposit = () => {
        if (!depositAmount) return;

        const amount = Number(depositAmount);
        const isUsdCurrency = currency === 'USD';

        if (isUsdCurrency) {
            dispatch(deposit(amount));
        } else {
            dispatch(fetchConvertedCurrency({ amount, currency }));
        }

        setDepositAmount('');
        setCurrency('USD');
    };

    const handleWithdraw = () => {
        if (!withdrawalAmount) return;

        const amount = Number(withdrawalAmount);

        dispatch(withdraw(amount));
        setWithdrawalAmount('');
    };

    const handleRequestLoan = () => {
        if (!loanAmount && !loanPurpose) return;

        const loan = Number(loanAmount);

        dispatch(requestLoan({ loan, loanPurpose }));
        setLoanAmount('');
        setLoanPurpose('');
    };

    const handlePayLoan = () => {
        if (currLoan === 0) return;

        dispatch(payLoan());
    };

    return (
        <div>
            <h2>Your account operations</h2>
            <div className="inputs">
                <div>
                    <label>Deposit</label>
                    <input
                        type="number"
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                    />
                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <option value="USD">US Dollar</option>
                        <option value="EUR">Euro</option>
                        <option value="GBP">British Pound</option>
                    </select>
                    <button onClick={handleDeposit} disabled={isConverting}>
                        {isConverting
                            ? 'Converting...'
                            : `Deposit ${depositAmount}`}
                    </button>
                </div>
                <div>
                    <label>Withdraw</label>
                    <input
                        type="number"
                        value={withdrawalAmount}
                        onChange={(e) => setWithdrawalAmount(e.target.value)}
                    />
                    <button onClick={handleWithdraw}>
                        Withdraw {withdrawalAmount}
                    </button>
                </div>
                <div>
                    <label>Request loan</label>
                    <input
                        type="number"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                        placeholder="Loan amount"
                    />
                    <input
                        value={loanPurpose}
                        onChange={(e) => setLoanPurpose(e.target.value)}
                        placeholder="Loan purpose"
                    />
                    <button onClick={handleRequestLoan}>Request loan</button>
                </div>
                {currLoan > 0 && (
                    <div>
                        <span>
                            Pay back{' '}
                            <b>
                                {currLoan} {currency}
                            </b>{' '}
                            ({currLoanPurpose}){' '}
                        </span>
                        <button onClick={handlePayLoan}>Pay loan</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AccountOperations;
