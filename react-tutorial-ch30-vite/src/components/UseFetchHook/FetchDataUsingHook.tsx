import useFetch from "./useFetch.hook";

interface IUser {
  id: string;
  name: string;
  username: string;
}


// doesn't work well yet
function FetchDataUsingHook(){
  const {get} = useFetch("https://react-tutorial-demo.firebaseio.com/")


  const data = get("users.json");


  console.log(users);

  return (
    <>
      <h2>Fetch Data Using Custom Fetch Hook</h2>
      <h3>Display Data Here</h3>
    </>
  )

}
export default FetchDataUsingHook;