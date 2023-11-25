import React, { useContext } from 'react';
import { GlobalContex } from '../context/GlobalState';
import Transaction from './Transaction';


const TransactionList = () => {

    // Destructure from context object
    const { transactions } = useContext(GlobalContex);
    console.log(transactions);
    // localStorage.setItem('transactions', transactions);
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <Transaction
                        key={transaction.id}
                        transaction={transaction}
                    ></Transaction>))}
            </ul>
        </div>
    )
}

export default TransactionList
