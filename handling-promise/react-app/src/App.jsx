import React, { useState } from 'react'
import './App.css'

function App() {
let state= {}

  const result = fetch('https://jsonplaceholder.typicode.com/todos/1')
  console.log(result)
  result
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => {console.log("You've got error!!", error)})


return(
  <>
      <h1>handling promise</h1>
      
  </>
)
}

export default App
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
