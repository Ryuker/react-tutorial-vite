import { useState, useEffect } from "react";

function FetchDataToState(){
  const [users, setUsers ] = useState();

  // runs twice in development mode, fetches data after the component rendered.
  useEffect(() => {
    fetch("https://react-tutorial-demo.firebaseio.com/users.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setUsers(data);
    });
  }, []);

  return(
    <>
      <h2>Fetch Data and store in state widget</h2>
      <h3>{users}</h3>
    </>
  )
}

export default FetchDataToState;