import useFetch from "./useFetch.hook";

interface IUser {
  id: string;
  name: string;
  username: string;
}

function PostDataUsingHook(){
  const {post} = useFetch("https://react-tutorial-demo.firebaseio.com/");

  function handlePost(){
    const objectToPost:IUser = {id: "5", name: "Bob", username: "bobinator" };
    post("users.json", objectToPost);
  }

  return(
    <>
      <h2>Post Data Using Hook Widget</h2>
      <button onClick={handlePost}>post data</button>
    </>
  )
}

export default PostDataUsingHook;