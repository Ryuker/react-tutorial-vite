import { useState, useEffect } from "react";

function JSONLocalStorage() {
  const [transactions, setTransactions] = useState<number[]>([]);

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