import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


//const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

//let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : []

// Create initial state
const initialState = {
    transactions: []
}

// const dummyTransactions = [
//   { id: 1, text: 'Flower', amount: -20 },
//   { id: 2, text: 'Salary', amount: 300 },
//   { id: 3, text: 'Book', amount: -10 },
//   { id: 4, text: 'Camera', amount: 150 }
// ];

// Create context
export const GlobalContex = createContext(initialState);

// Create provider component
export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (
        <GlobalContex.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContex.Provider>);
}