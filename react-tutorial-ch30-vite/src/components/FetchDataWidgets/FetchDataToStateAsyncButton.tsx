import { useState } from "react";
import Loader from "./Loader";

interface IUser {
  id: string;
  name: string;
  username: string;
}

function FetchDataToStateAsync(){
  const [users, setUsers] = useState<IUser[]>();
  const [isLoading, setIsLoading] = useState(false);


  async function handleLoadButtonClick(){
    try{
      setIsLoading(true);
      const response = await fetch("https://react-tutorial-demo.firebaseio.com/users.json")
      const data:IUser[] = await response.json();
      setUsers(data);
    }catch(error){
      console.log(error);
    }
    finally{
      setIsLoading(false);
    }
  }


  return(
    <>
      <h2>Fetch Data to State with Button using Async Await</h2>
      <button onClick={handleLoadButtonClick} disabled={isLoading}>
        {isLoading ? "Loading Users" : "Load Users"}
        </button>
      <h3>Users</h3>
      {isLoading ? <Loader/> : 
        <ul>
          {users && users.map(user => <li>id: {user.id} name: {user.name} username: {user.username}</li>)}
        </ul>
      }
    </>
  )
}

export default FetchDataToStateAsync;