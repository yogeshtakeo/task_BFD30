import Button from './component/button/button.jsx'
import Input from './component/input/input.jsx'
import './App.css'
function App() {
  return (
  <>
    <div className='header'>
      <h2>Figma UI/UX Design - Basic Component Design</h2>
    </div>
    <div className='content'>
      <Input/>
      <Button/>
    </div>
  </>  
  )
}

export default App