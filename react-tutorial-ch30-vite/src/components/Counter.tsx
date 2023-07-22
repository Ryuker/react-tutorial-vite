import {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)

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