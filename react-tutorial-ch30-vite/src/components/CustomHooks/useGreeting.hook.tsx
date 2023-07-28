import { useEffect } from "react";

export  function useWelcomeGreeting(){
  console.log("Welcome to my greeting hook");
}

export function useWelcomeGreetingEffectOnce(){
  useEffect(() => {
    console.log("Welcome to my greeting hook");
  }, [])
}

export function useWelcomeGreetingEffectEachRender(){
  useEffect(() => {
    console.log("Welcome to my greeting hook");
  })
}