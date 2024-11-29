import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wishesh from './Components/Wishesh';
import File from './Components/File1';
import Message from './Components/Message';
import Props from './Components/Props';
import UseContextHook from './Components/hooks/UseContextHook';
import ApiIntegration from './Components/Api Integration/API_Integration';
import UseState from './Components/hooks/UseState';
import UseEffect from './Components/hooks/UseEffect';
import UseMemo from './Components/hooks/UseMemo';
import UseCallback from './Components/hooks/UseCallback';
import UseReducer from './Components/hooks/UseReducer';
import TraditionalCss from './Components/styling Css/TraditionalCss';
import ModuleCss from './Components/styling Css/ModuleCss';
import InlineCss from './Components/styling Css/InlineCss';
import StyledCss from './Components/styling Css/StyledCss';
import Api_Integration_Fetch from './Components/Api Integration/Api_Integration_Fetch';
import RoutingMain from './Components/Routing/RoutingMain';
import PropsDrilling from './Components/propsDrilling/PropsDrilling';


function App() {

  return (
    <>
     {/* <Wishesh/>
     <File/>  
     
     <Message/>
     <Props language="ReactJs"/>
     <UseContextHook/> */}
  {/* <UseState/>
  <UseEffect/>
  <UseMemo/>
  <UseCallback/>
  <UseReducer/>
  <TraditionalCss/>
  <ModuleCss/>
  <InlineCss/>
  <StyledCss/> */}

  {/* <Api_Integration_Fetch/> */}
     {/* <ApiIntegration/> */}

     <RoutingMain/>
     <PropsDrilling/>
    </>
  )
}

export default App
