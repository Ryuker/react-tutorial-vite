/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Loader from './Loader';

interface IUser {
  id: string;
  name: string;
  username: string;
}

function FetchDataToState(){
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers ] = useState<IUser[]>();

  // runs twice in development mode, fetches data after the component rendered, if there's no object in data yet.
  useEffect(() => {
    if (!users){
      fetch("https://react-tutorial-demo.firebaseio.com/users.json")
      .then(response => response.json())
      .then((data:IUser[]) => {
        console.log(data);
        if(data)
          setUsers(data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(true);
      });
    }
  },[]);

  if (isLoading)
    return (
      <>
        <h1>Data still loading</h1>
        <Loader />
      </>
    );

  return(
    <>
      <h2>Fetched Data and store in state widget</h2>
      <h3>{users && users.map(user => `user: ${user.id} name: ${user.name} username: ${user.username}`)}</h3>
      <h3>{users && JSON.stringify(users)}</h3>
    </>
  )
}

export default FetchDataToState;