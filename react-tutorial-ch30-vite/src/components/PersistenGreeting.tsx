import { useState, useEffect, ChangeEvent } from "react";

function PersistenGreeting(){
  const [name, setName] = useState<string>(() => localStorage.getItem("name") ?? ""); // sets the name to the value in local storage

  useEffect(() => { // stores the name in localStorage when the name changes
    localStorage.setItem("name", name);
  }, [name])


  function handleNameChange(event: ChangeEvent<HTMLInputElement>){
    setName(event.target.value);
  }


  return (
    <>
      <h2>Persistent Greeting in Local Storage</h2>
      <h3>Hello {name}</h3>
      <label htmlFor="name_input">Name Input: </label>
      <input id="name_input" type="text" name="name" value={name} onChange={handleNameChange}></input>
    </>
  )
}

export default PersistenGreeting;