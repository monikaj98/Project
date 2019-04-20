import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Comment1 from './Comment1';
import AddComment1 from './AddComment1';
import Navbar2 from './Navbar2';
import '../App.css';

class Gallery extends React.Component {
	
	 // we have used it so that when we open our page it opens from the top
    componentDidMount() {
        window.scrollTo(0, 0)
    }
      
    // this is our UI you can understand them on the screen as it gets render
    render() {
        return (
            <div>
               <h1 className='heading1' >Gallery</h1>
               <br />
                <div className="card5 card">
                    <div className='row left-align'>
                        <h2 id="gpt">Travel Photography</h2>
                        <div className='col s3'>
                            <img className='image1 im2' src='https://imgur.com/MGfWtPL.jpg' alt='pic1' id="gp"/>
                        </div>
                        <div className='col s3'>
                            <img className='image1 im2' src='https://imgur.com/wTKTmMf.jpg' alt='pic1' id="gp"/>
                        </div>
                        <div className='col s3'>
                            <img className='image1 im2' src='https://imgur.com/A8QxBZQ.jpg' alt='pic1' id="gp"/>
                        </div>
                        <Link to='/TravelPhotography'><h4 className='right-align'>more...</h4></Link>
                    </div>
                    <div className='row left-align'>
                        <h2 id="gpt">Portraits</h2>
                        <div className='col s3'>
                            <img className='image1 im2' src='https://imgur.com/cEEWBf6.jpg' alt='pic1' id="gp"/>
                        </div>
                        <div className='col s3'>
                            <img className='image1 im2' src='https://imgur.com/0RKGwdT.jpg' alt='pic1' id="gp"/>
                        </div>
                        <div className='col s3'>
                            <img className='image1 im2' src='https://imgur.com/BgbbB16.jpg' alt='pic1' id="gp"/>
                        </div>
                        <Link to='/Potraits'><h4 className='right-align'>more...</h4></Link>
                    </div>
                    <div className='row left-align'>
                        <h2 id="gpt">Nature Photography</h2>
                        <div className='col s3'>
                            <img className='image1 im2' src='https://imgur.com/D8exOVj.jpg' alt='pic1' id="gp" />
                        </div>
                        <div className='col s3'>
                            <img className='image1 im2' src='https://imgur.com/UnGk0Aj.jpg' alt='pic1' id="gp"/>
                        </div>
                        <div className='col s3'>
                            <img className='image1 im2' src='https://imgur.com/jwbshNR.jpg' alt='pic1' id="gp"/>
                        </div>
                        <Link to='/NaturePhotography'><h4 className='right-align'>more...</h4></Link>
                    </div>
                </div>
			<br/>
			<br/>
			<br/>
            </div>
        )
    }
}

export default Gallery;