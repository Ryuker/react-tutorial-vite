import { useState } from "react";
import Loader from "./Loader";
import { API_PATH, API_USERS_LOCATION } from "../../utils/paths";

interface IUser {
  id: string;
  name: string;
  username: string;
}

function FetchDataToStateWithButton(){
  const [users, setUsers] = useState<IUser[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleLoadButtonClick() {
    setIsLoading(true);

    fetch(`${API_PATH}${API_USERS_LOCATION}`)
    .then(response => response.json())
    .then((data:IUser[]) => {
      if (data)
        setUsers(data);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }
  
  return (
    <>
      <h2>Fetch Data to State with Button widget</h2>
      <button onClick={handleLoadButtonClick} disabled={isLoading}>{isLoading ? "Loading Users" : "Load Users"}</button>
      {isLoading && <Loader/>}
      {isLoading ? <Loader/> :
        <ul>
          {users && users.map(user => <li key={user.id}>id: {user.id} name: {user.name} username: {user.username}</li>)}
        </ul>
      }
    </>
  )
}

export default FetchDataToStateWithButton;