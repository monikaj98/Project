import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

const Navbar2 = (props) => {
    return(
        <nav className='nav-wrapper  lighten-3 st'>
            <ul className='list st2' id="st2back">
                <li><Link to='/TravelPhotography'><h5>Travel Photography</h5></Link></li>
                <li><Link to='/Potraits'><h5>Portraits</h5></Link></li>
                <li><Link to='/NaturePhotography'><h5>Nature Photography</h5></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar2;