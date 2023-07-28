import useCounter from './useCounter.hook';

function Counter() {
  const {count, increment, decrement} = useCounter();

  return (
    <>
      <h2>Counter Widget Using Hooks</h2>
      <h3>count: {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default Counter;