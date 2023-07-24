import { useState, useEffect } from "react";

function StopWatch() {
  const [counter, setCounter] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => { // start timeOut after 1st render, incremented each 1 second
    if (running){
      const timerID = setTimeout(() => {
        setCounter(prevCounter => prevCounter + 1);
      }, 1_000)

      return () => { clearTimeout(timerID) }; // clear timer when component is removed to prevent memory leak
    }
  })

  function handleToggleClick() {  // toggle running between true and false
    setRunning(prevValue => !prevValue)
  }

  function handleStopClick () {   // stop timer and reset counter
    setCounter(0);
    setRunning(false);
  }

  return (
  <>
      <h2>Stop Watch Widget</h2>
      <h3>{counter}</h3>
      <button onClick={handleToggleClick}>{running ? "Pause" : (counter > 0 ? "Continue" : "Start")}</button>
      {running ? <button onClick={handleStopClick}> Stop </button> : ""}
    </>
  )
}

export default StopWatch;