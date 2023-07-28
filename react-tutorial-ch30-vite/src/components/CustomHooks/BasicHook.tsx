import { useEffect } from "react";

export default function useWelcomeGreeting(){
  console.log("Welcome to my greeting hook");
}

export default function useWelcomeGreetingEffectOnce(){
  useEffect(() => {
    console.log("Welcome to my greeting hook");
  }, [])
}

export default function useWelcomeGreetingEffectEachRender(){
  useEffect(() => {
    console.log("Welcome to my greeting hook");
  })
}