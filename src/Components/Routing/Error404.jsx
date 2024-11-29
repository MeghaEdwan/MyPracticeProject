import React from 'react';
import { Link } from 'react-router-dom';

function Error404(props) {
    return (
        <div>
            <h3>Ooops something went wrong.....</h3>
            <p>Please go back to home page</p>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Error404;