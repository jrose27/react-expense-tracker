import React, { useContext } from 'react'
import { GlobalContex } from '../context/GlobalState';

const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContex);

    const amountSign = transaction.amount < 0 ? '-' : '+';
    const classNameValue = transaction.amount < 0 ? 'minus' : 'plus'

    return (
        <li className={classNameValue}>
            {transaction.text}
            <span>{amountSign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

export default Transaction
