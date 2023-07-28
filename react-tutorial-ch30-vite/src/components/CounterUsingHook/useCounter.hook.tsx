import { useState } from "react";

export default function useCounter(){
  const [count, setCount] = useState<number>(0);

  function increment(){
    setCount(prevCount => prevCount + 1);
  }

  function decrement(){
    setCount(prevCount => prevCount > 0 ? prevCount -1 : 0)
  }

  return {count, increment, decrement};
}