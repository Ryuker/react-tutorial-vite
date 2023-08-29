import { FormEvent } from "react";

// for reference only
fetch("https://react-tutorial-demo.firebaseio.com/grades.json", {
    method: "POST", // specified we are sending something
    headers: {
        "Content-Type": "application/json" // the format we're sending to the api
    },
    body: JSON.stringify({grade: 50})   // the data to add to the api
})
.then(response => response.json())
.then(data => {
    console.log(data);
});


// Async-await variant 
const grade = 50;
export async function addEntryToApi(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  try{
      console.log("about to send:" + grade);
      await fetch("https://api.learnjavascript.online/demo/react/grades", { 
          method:"POST", 
          headers: {"Content-Type": "application/json"}, 
          body: JSON.stringify({grade: grade})
      });
  }catch(error){
      console.log(error);
  }finally{
      console.log("done sending")
  }
}

// Async-await PUT variant - updates a value in the api that already exists
const currency = "USD";
export async function updateEntryInApi(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  try{
      console.log("about to send:" + grade);
      await fetch("https://api.learnjavascript.online/demo/react/grades", { 
          method:"POST", 
          headers: {"Content-Type": "application/json"}, 
          body: JSON.stringify({currency: currency})
      });
  }catch(error){
      console.log(error);
  }finally{
      console.log("done sending")
  }
}