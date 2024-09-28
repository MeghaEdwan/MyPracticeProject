import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {

    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/service">Services</Link>
            
        </div>
    );
}

export default Nav;