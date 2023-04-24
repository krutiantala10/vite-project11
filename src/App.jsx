import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from '../src/Componenet/Card'
import Navbar from '../src/Componenet/Navbar'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Card></Card>
      <Card></Card>
    </div>
  )
}

export default App
