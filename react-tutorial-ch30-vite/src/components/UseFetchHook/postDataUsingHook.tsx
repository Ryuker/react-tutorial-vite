import useFetch from "./useFetch.hook";

interface IUser {
  id: string;
  name: string;
  username: string;
}

function PostAndGetDataUsingHook(){
  const {get, post, loading} = useFetch("https://react-tutorial-demo.firebaseio.com/");

  function handleGet(){
    get("users.json")
    return;
  }

  function handlePost(){
    const objectToPost:IUser = {id: "5", name: "Bob", username: "bobinator" };
    post("users.json", objectToPost);
  }

  return(
    <>
      <h2>Post Data Using Hook Widget</h2>
      <button onClick={handlePost}>post data</button>
      <button onClick={handleGet}>get data</button>
      <h2>{loading ? "loading...." : ""}</h2>
    </>
  )
}

export default PostAndGetDataUsingHook;