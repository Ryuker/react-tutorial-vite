import useSWR from 'swr';
import { API_PATH, API_USERS_LOCATION } from "../../utils/paths";

//const fetcher = (...args) => fetch(...args).then(res => res.json())
const fetcher = (url:string) => fetch(url).then(r => r.json())

interface IUser {
  id: string;
  name: string;
  username: string;
}

//loads users from the api
const Alias = () => {
  const {data:users, isLoading, error} = useSWR<IUser[]>(`${API_PATH}${API_USERS_LOCATION}`, fetcher);
  if (isLoading) return <h3>Loading Users</h3>
  if (users) 
    return <ul>{users?.map((user) => <li key={user.id}>{`user: ${user.id} name: ${user.name} username: ${user.username}`}</li>)}</ul>
  if (error)
    console.log("swr error: " + error)
};

function FetchDataToState(){
  const {data:users} = useSWR<IUser[]>(`${API_PATH}${API_USERS_LOCATION}`, fetcher);

  return(
    <>
      <h2>Fetch Data and store in state widget</h2>
      <h3>{users && users.map((user) => `user: ${user.id} name: ${user.name} username: ${user.username}`)}</h3>
      <h3>{users && JSON.stringify(users)}</h3>
      <p>alias load</p>
      <Alias />
    </>
  )
}

export default FetchDataToState;