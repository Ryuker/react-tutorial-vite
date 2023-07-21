import Counter from './components/Counter'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>My First React App</h1>
      <h2>~ Joeri</h2>
      <Counter />
      <span>powered by:</span>
      <div>
        <a target="_blank" href="https://vitejs.dev/"><img  src={viteLogo} className="logo" alt="Vite logo"/></a> 
        <a target="_blank" href="https://react.dev/"><img  src={reactLogo} className="logo react" alt="React logo"/></a>
      </div>
    </>
  )
}

export default App
