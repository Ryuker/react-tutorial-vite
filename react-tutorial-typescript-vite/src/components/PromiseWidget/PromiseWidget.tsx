import wait from './Wait';

// logs after 500ms  has passed.
wait(500).then(() =>{
  console.log("The wait is over");
});