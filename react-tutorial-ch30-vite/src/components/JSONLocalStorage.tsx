import { useState, useEffect } from "react";

function JSONLocalStorage() {
  // retrieves transactions array from the key in local storage, only runs once. If no value has been set it just returns [].
  // string is parsed from json on array. 
  const [transactions, setTransactions] = useState<number[]>(() => {
    // parses object to array, parses empty array if key doesn't exist.
    return JSON.parse(localStorage.getItem("transactions") ?? '[]'); 
    //Alternative method
    // const storageValue = localStorage.getItem('transactions') ?? "";    // get transactions key value, if it doesn't exist we return empty string.

    // // parse object string to array if storage value isn't null, else return empty array.
    // return storageValue === "" ? JSON.parse(storageValue) : [];          
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  function handleDepositClick() {
    setTransactions([...transactions, 10]);
  }

  function handleWithdrawClick() {
    setTransactions([...transactions, -10]);
  }

  function handleClearClick(){
    setTransactions([]);
  }

  // https://codetogo.io/how-to-sum-items-of-array-in-javascript/
  const sum = transactions.reduce((total, current) => total + current, 0);

  return (
    <>
      <h2>JSON Local Storage Widget</h2>
      <h3>total: {sum}</h3>
      <button onClick={handleDepositClick}>Deposit 10</button>
      <button onClick={handleWithdrawClick}>Withdraw 10 </button>
      <button onClick={handleClearClick}>Reset</button>
      <h3>transactions:</h3>
      <ul>
        { transactions.map((transaction, index) => <li key={index}>{transaction}</li>)}
      </ul>
    </>
  )
}

export default JSONLocalStorage;