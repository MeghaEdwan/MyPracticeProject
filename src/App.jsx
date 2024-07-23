import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wishesh from './Components/Wishesh';
import File from './Components/File1';
import Message from './Components/Message';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Wishesh/>
     <File/>
     <Message/>
    </>
  )
}

export default App
