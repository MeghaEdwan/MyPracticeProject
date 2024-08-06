import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wishesh from './Components/Wishesh';
import File from './Components/File1';
import Message from './Components/Message';
import Props from './Components/Props';
import UseContextHook from './Components/hooks/UseContextHook';


function App() {

  return (
    <>
     <Wishesh/>
     <File/>
     <Message/>
     <Props language="ReactJs"/>
     <UseContextHook/>
    </>
  )
}

export default App
