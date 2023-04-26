import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from '../src/Componenet/Card'
import Navbar from '../src/Componenet/Navbar'
import Login from './Componenet/Forms/Login'
import Registraion from './Componenet/Forms/Registratiuon'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Navbar></Navbar>
      <Card></Card>
      <Card></Card> */}
      <Registraion></Registraion>
      <Login></Login>
    </div>
  )
}

export default App
