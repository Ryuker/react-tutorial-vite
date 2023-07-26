/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

interface IUser {
  id: string;
  name: string;
  username: string;
}

function FetchDataToState(){
  const [users, setUsers ] = useState<IUser[]>();

  // runs twice in development mode, fetches data after the component rendered, if there's no object in data yet.
  useEffect(() => {
    if (!users){
      fetch("https://react-tutorial-demo.firebaseio.com/users.json")
      .then(response => response.json())
      .then((data:IUser[]) => {
        console.log(data);
        setUsers(data);
      });
    }
  },[]);

  return(
    <>
      <h2>Fetch Data and store in state widget</h2>
      <h3>{users?.map(user => `user: ${user.id} name: ${user.name} username: ${user.username}`)}</h3>
      <h3>{JSON.stringify(users ?? "")}</h3>
    </>
  )
}

export default FetchDataToState;