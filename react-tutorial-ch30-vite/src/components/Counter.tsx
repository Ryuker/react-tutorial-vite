import {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  function handleIncrement() {
    setCount(prevCounter => prevCounter + 1);
  }

  function handleDecrement() {
    setCount(prevCounter => prevCounter - 1);
  }

  return (
    <>
      <div className="card">
        <p>Rendering my Counter</p>
        <button onClick={handleIncrement}> + </button>
        <button onClick={handleDecrement}> - </button>
        <span>count is {count}</span>
        <p>click '+'' and '-'' button to change count</p>
      </div>
    </>
  )
}


export default Counter