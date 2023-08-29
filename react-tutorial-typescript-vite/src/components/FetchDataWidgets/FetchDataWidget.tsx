import { API_PATH, API_USERS_LOCATION } from "../../utils/paths";

function init(){
  fetch(`${API_PATH}${API_USERS_LOCATION}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
}

init();