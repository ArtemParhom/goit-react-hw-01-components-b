import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(el => ( 
                    <tr key={el.id}>
                        <td>{el.type}</td>
                        <td>{el.amount}</td>
                        <td>{el.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>)
}

TransactionHistory.protTypes = {
    items: PropTypes.array.isRequired,
};