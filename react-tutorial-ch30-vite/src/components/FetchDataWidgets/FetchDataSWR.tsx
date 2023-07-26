import useSWR from 'swr';

//const fetcher = (...args) => fetch(...args).then(res => res.json())
const fetcher = (url:string) => fetch(url).then(r => r.json())

interface IUser {
  id: string;
  name: string;
  username: string;
}

//loads users from the api
const Alias = () => {
  const {data:users, isLoading, error} = useSWR<IUser[]>("https://react-tutorial-demo.firebaseio.com/users.json", fetcher);
  if (isLoading) return <h3>Loading Users</h3>
  if (users) 
    return <ul>{users?.map((user) => <li key={user.id}>{`user: ${user.id} name: ${user.name} username: ${user.username}`}</li>)}</ul>
  if (error)
    console.log("swr error: " + error)
};

function FetchDataToState(){
  const {data:users} = useSWR<IUser[]>("https://react-tutorial-demo.firebaseio.com/users.json", fetcher);

  return(
    <>
      <h2>Fetch Data and store in state widget</h2>
      <h3>{users?.map((user) => `user: ${user.id} name: ${user.name} username: ${user.username}`)}</h3>
      <h3>{JSON.stringify(users ?? "")}</h3>
      <p>alias load</p>
      <Alias />
    </>
  )
}

export default FetchDataToState;