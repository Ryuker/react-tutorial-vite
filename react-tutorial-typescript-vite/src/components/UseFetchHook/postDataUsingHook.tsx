import useFetch from "./useFetch.hook";
import { API_PATH, API_USERS_LOCATION } from "../../utils/paths";

interface IUser {
  id: string;
  name: string;
  username: string;
}

function PostAndGetDataUsingHook(){
  const {get, post, loading} = useFetch(`${API_PATH}`);

  function handleGet(){
    get(`${API_USERS_LOCATION}`)
    return;
  }

  function handlePost(){
    const objectToPost:IUser = {id: "5", name: "Bob", username: "bobinator" };
    post(`${API_USERS_LOCATION}`, objectToPost);
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