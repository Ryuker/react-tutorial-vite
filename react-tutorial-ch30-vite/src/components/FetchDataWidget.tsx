// URL: https://react-tutorial-demo.firebaseio.com/users.json

function init(){
  fetch("https://react-tutorial-demo.firebaseio.com/users.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
}

init();