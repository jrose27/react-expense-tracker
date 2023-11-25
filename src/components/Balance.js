import React, { useContext } from 'react'
import { GlobalContex } from '../context/GlobalState'

const Balance = () => {

    const { transactions } = useContext(GlobalContex);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((runningTotal, item) => (runningTotal += item), 0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}

export default Balance
