import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';
import Error404 from './Error404';
import Nav from './Nav';

function RoutingMain(props) {
    return (
        <div>
            <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<AboutUs/>}/>
                <Route path='/service' element={<Services/>}/>
                <Route path ="*" element={<Error404/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RoutingMain;