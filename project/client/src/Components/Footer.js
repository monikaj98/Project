import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

	// using props sent from another component in this function
const Footer = (props) => {
	// it returns footer in all webpages with the help of withRouter
    return(
        <footer className='page-footer grey darken-4'>
             <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <div className='left'>
                        <h4 className="white-text "><img src="https://imgur.com/gt1V3rz.jpg" id="cam"/>Snapskill</h4>
                        <h5 className="grey-text text-lighten-4" id="follow">Believe you can fly.</h5><br />
                        </div>
                    </div>
                    <div className="col l3 offset-l3 s12">
                        <h5 className="white-text left">Categories</h5>
                        <ul>
                            <br /><br />
                            <Link to='/TravelPhotography'><li className="grey-text text-lighten-3 left" id="follow">Travel Photography</li></Link><br />
                            <Link to='/Potraits'><li className="grey-text text-lighten-3 left" id="follow">Portraits</li></Link><br />
                            <Link to='/NaturePhotography'><li className="grey-text text-lighten-3 left" id="follow">Nature Photography</li></Link><br />
                        </ul>
                    </div>
                </div>
            </div>
		    <div className="icons">
		    <h1 id="follow">Follow us on:)</h1>
		    <a href="https://www.instagram.com/"><img src="https://imgur.com/ckchFrR.jpg" id="ico"/></a>&nbsp;&nbsp;
		    <a href="https://www.facebook.com/"><img src="https://imgur.com/TKVtL9T.jpg" id="ico"/></a>&nbsp;&nbsp;
		    <a href="https://twitter.com/login?lang=en"><img src="https://imgur.com/IRWcQNU.jpg" id="ico"/></a>
		    </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2019 Copyright Text
                </div>
            </div>
        </footer>
    )
}

export default withRouter(Footer);