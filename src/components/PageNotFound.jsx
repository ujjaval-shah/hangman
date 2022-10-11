import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound(props) {
    return (
        <div className='home gamingfont'>
            Page Not Found.
            <br />
            Go Back To <Link to={"/"}> Home </Link>.
        </div>
    );
}

export default PageNotFound;