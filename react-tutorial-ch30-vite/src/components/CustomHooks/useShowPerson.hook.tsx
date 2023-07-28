import { useEffect } from "react";

const defaultOptions = {
  name: "Sherlock Holmes",
  adress: "bakerstreet"
}

export default function useShowPerson(options: object){

  useEffect(() => {

    const newUser ={
      ...defaultOptions, ...options
    }

    console.log("person: " + newUser);
  }, [options])
}