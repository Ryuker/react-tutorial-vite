import {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <p>Rendering my Counter</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>click counter button to increment count</p>
      </div>
    </>
  )
}


export default Counter