// for reference only
fetch("https://react-tutorial-demo.firebaseio.com/grades.json", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({grade: 50})
})
.then(response => response.json())
.then(data => {
    console.log(data);
});