import { useState, useEffect } from "react";
import Loader from "./Loader";
import { API_PATH, API_USERS_LOCATION } from "../../utils/paths";

interface IUser {
  id: string;
  name: string;
  username: string;
}

function FetchDataToStateAsync(){
  const [users, setUsers] = useState<IUser[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => { // runs this function async, fetches the data, enables the loader and disables when data has been set
      try{
        setIsLoading(true);
        const response = await fetch(`${API_PATH}${API_USERS_LOCATION}`)
        const data:IUser[] = await response.json();
        setUsers(data);
      }catch(error){
        console.log(error);
      }
      finally{
        setIsLoading(false);
      }
    })();
  }, []);


  return(
    <>
      <h2>Fetch Data to State using Async Await</h2>
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