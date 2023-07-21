import { useState } from 'react'
import TestComponent from './components/TestComponent'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My First React App</h1>
      <h2>~ Joeri</h2>
      <TestComponent />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>click counter button to increment count</p>
      </div>
    </>
  )
}

export default App
