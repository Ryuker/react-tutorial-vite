import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {                             // set timer interval on first render, each 1 sec it gets the new date
    const intervalID = setInterval(() => {
      setDate( new Date());
    }, 1_000);

    return () => { clearInterval(intervalID); } // clean up the interval when clock stops rendering to prevent memory leak.
  }, []);

  return (
    <>
      <h2>Clock: {date.toLocaleTimeString()}</h2>
    </>
  )
}

export default Clock;