import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

const Navbar = (props) => {
    return(
        <nav className='nav-wrapper grey darken-4 st'>
            <Link to='/' className='left logo'><img src="https://imgur.com/gt1V3rz.jpg" id="cam"/> SnapSkill </Link>
            <ul className='right list'>
                <li><Link to='/' id="follow">Home</Link></li>
				<li><Link to='/About' id="follow">About</Link></li>
				<li><Link to='/Gallery' id="follow">Gallery</Link></li>
         		<li><Link to='/Login' id="follow">Login</Link></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar);