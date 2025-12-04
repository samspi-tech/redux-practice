import { useAppSelector } from '../../redux/hooks';

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'USD',
    }).format(value);
};

const BalanceDisplay = () => {
    const { balance } = useAppSelector((state) => state.account);

    return <div className="balance">{formatCurrency(balance)}</div>;
};

export default BalanceDisplay;
