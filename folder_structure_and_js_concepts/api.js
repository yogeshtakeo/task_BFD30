function resolveATask2Seconds() {
    setTimeout(() => {
        console.log("Response 1");

    }, 2000)
}

const promiseResolved = new Promise((resolve, reject) => {
    resolve("Hello this is the response")
});

const promiseRejected = new Promise((resolve, reject) => {
    reject("This is rejected Promise");

});

promiseResolved.then((response) => {
    console.log(response);
})
.catch((error) =>{
    console.log("This is an error", error.repsonse);
})

const fetchingTheData = window.fetch("https://jsonplaceholder.typicode.com/todos/1");
console.log(fetchingTheData);

fetchingTheData
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        console.log("This is an error", error);
    })



console.log("promise Resolved", promiseResolved);
console.log("promise Rejected", promiseRejected);
resolveATask2Seconds();