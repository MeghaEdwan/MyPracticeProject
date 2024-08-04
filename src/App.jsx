import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wishesh from './Components/Wishesh';
import File from './Components/File1';
import Message from './Components/Message';
import Props from './Components/Props';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Wishesh/>
     <File/>
     <Message/>
     <Props language="ReactJs"/>
    </>
  )
}

export default App
