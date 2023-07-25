import { useState, useEffect } from "react";

function PersistenCounter() {
  // retrieves counter value from the key in local storage, only runs once. If no value has been set it just return false.
  // string value get's parsed to integer, set to 0 when there is not key in local storage yet.
  const [counter, setCount] = useState<number>(function() {
    return Number.parseInt(localStorage.getItem("counter") ?? "0");
  });

  useEffect(() => {
    localStorage.setItem("counter", counter.toString())
  }, [counter]);


  function handleIncrementClick(){
    setCount(prevCounter => prevCounter +1);
  }

  function handleDecrementClick(){
    setCount(prevCounter => prevCounter - 1);
  }

  function handleResetClick(){
    setCount(0);
  }

  return (
    <>
      <h2>Persisten Counter Widget</h2>
      <p>Retrieved counter value from local storage if it exists</p>
      <h3>count: {counter}</h3>
      <button onClick={handleIncrementClick}>+</button>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleResetClick}>reset</button>
    </>
  )
}

export default PersistenCounter;