import "./App.css";

function App() {
  //API-Application Program Interface
  //1. Make API request and handle promise

  //Fetch function to make a GET request to chosen API endpoint.
  const dataFetch = fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(dataFetch);

  //Handling the promise using then() and catch() methods; hanldes the response or any errors that may occur.

  //The 1st then() method is called when promise is resolved successfully,i.e; server responded with valid HTTP response.

  dataFetch
    .then((response) => response.json()) //response.json() method is called to parse response body as JSON. It returns a promise that resolves to parsed JSON data.

    .then((data) => { //The 2nd then() method is chained to promise returned by response.json().
      console.log(data);
    })

    //In case of any errors that occur during fetch operation or request, the catch() method is called.

    .catch((error) => {
      console.error("Error", error);
    });
    //2. Handle Promise Rejection
  const wrongdataFetch = fetch("https://jsonplaceholder.typicode.com/pot");
  console.log(wrongdataFetch);
  wrongdataFetch
    .then((response) => {
      if (!response.ok) {
        //this condition will check if there is any error while fetching url.If there is no error it will go to return (response.json).
        console.log("Error; either Network issues or the url doesn't exist.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      //handles promiseRejection
      console.log("You have encountered Errors", error);
    });

  return <></>;
  }

export default App;
  