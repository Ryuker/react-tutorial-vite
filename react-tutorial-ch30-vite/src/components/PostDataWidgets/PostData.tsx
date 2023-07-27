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