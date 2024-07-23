import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wishesh from './Components/Wishesh'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Wishesh/>
    </>
  )
}

export default App
