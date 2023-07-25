import { useState, useEffect, ChangeEvent } from "react";

function PersistenGreeting(){
  // retrieves name from the key in local storage, only runs once. If no value has been set it just return an empty string.
  const [name, setName] = useState<string>(() => localStorage.getItem("name") ?? ""); 

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