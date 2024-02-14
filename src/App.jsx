import Title from './components/title/title'
import Button from './components/button/button'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
          
          <Title title='Getting started with React'/>
          <Button />
      </div>
    </>
  )
}

export default App
