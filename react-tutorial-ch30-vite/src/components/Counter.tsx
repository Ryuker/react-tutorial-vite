import {useState, useEffect} from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count === 0){
      document.title = "Welcome";
      return;
    }
    document.title = `${count} count`
  });

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