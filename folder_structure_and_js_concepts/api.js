// error in fetch witha typo in the url

function App() {
    const fetchingTheData = fetch("htts://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log("This is an absolute error", error))

    return <div>App</div>
}
    export default App

// Promise handled with correct url

    const fetchingTheData = fetch("https://jsonplaceholder.typicode.com/comments");
        console.log(fetchingTheData)

fetchingTheData
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        console.log("This is an absolute error", error);
    })