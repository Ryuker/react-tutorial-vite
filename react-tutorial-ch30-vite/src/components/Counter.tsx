import {useState, useEffect} from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  // Log to console when component is mounted.
  useEffect(() => {console.log("Done mounting Counter")},[]);

  useEffect(() => {
    if (count === 0){
      document.title = "Welcome";
      return;
    }

    document.title = `${count} 'count' ${count === 1 ? 'click':'clicks'}`;
    
    // display still in document.title  after 2 seconds have passed
    const timerID = setTimeout(() => {
      document.title = "Still there?";
    }, 2_000);

    // cleanupTimer to prevent memory leak
    return function cleanUpTimeoutTimer() {
      clearTimeout(timerID);
    }
  }, [count]);

  function handleIncrement() {
    setCount(prevCounter => prevCounter + 1);
  }

  function handleDecrement() {
    setCount(prevCounter => prevCounter - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <div className="card">
        <p>Rendering my Counter</p>
        <div style={{display: 'flex'}} >
          <button onClick={handleIncrement}> + </button>
          <button onClick={handleDecrement}> - </button>
        </div>
        <span>count is {count}</span>
        <button onClick={handleReset}> Reset </button>
        <p>click '+'' and '-'' button to change count</p>
      </div>
    </>
  )
}


export default Counter