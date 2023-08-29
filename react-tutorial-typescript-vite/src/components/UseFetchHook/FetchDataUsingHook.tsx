import useFetch from "./useFetchExperimental.hook";
import { API_PATH, API_USERS_LOCATION } from "../../utils/paths";


interface IUser {
  id: string;
  name: string;
  username: string;
}


// doesn't work well yet
function FetchDataUsingHook(){
  let users: IUser[] = [] ;
  const {get} = useFetch(`${API_PATH}`)

  const data = get<IUser>(`${API_USERS_LOCATION}`)
  console.log(data);
  
  if (Array.isArray(data))
    users = data.map((user:IUser) => {return user} )

  console.log(users);

  // const users = JSON.stringify(data);

  // const users: Array<IUser> = data;

  // const [{ name, id, username }] : { users: IUser[]} = data; 
  // const users = data.map((user:IUser) => {return {user}} )

  return (
    <>
      <h2>Fetch Data Using Custom Fetch Hook</h2>
      <h3>Display Data Here</h3>
      <ul>
          {users && users.map(user => <li>id: {user.id} name: {user.name} username: {user.username}</li>)}
        </ul>
    </>
  )

}
export default FetchDataUsingHook;