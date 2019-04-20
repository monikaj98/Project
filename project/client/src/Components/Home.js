import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class Home extends Component {
	 // we have used it so that when we open our page it opens from the top
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
   // this is our UI  you can understand them on the screen as it gets render
    render(){
        return(
            <div className="main">
                <div className='home'>
                    <br /><br /><br/><br/>
                    <h4 className='sub'>Believe you can fly. <img src="https://imgur.com/Y2FV7Ku.jpg" id="bird"/></h4>
                </div>
			<br/><br/>
                <div className='sub1'> Explore and Share your moment <img src="https://imgur.com/NUVy1oN.jpg" id="hills"/></div>
                <div className='card card1'>
                    <Carousel autoPlay="true" infiniteLoop="true" className="img1">
                        <img src="https://imgur.com/yXslPdG.jpg" alt="painting"  />
                        <img src="https://imgur.com/31XyE3j.jpg" alt="painting"  />
                        <img src="https://imgur.com/qV8uwzd.jpg" alt="painting"  />
                    </Carousel>
                    <p className='text'> Lorem ipsum dolor sit amet, ad his alii mandamus, at qui amet suscipit dissentiet. Errem ceteros luptatum at vim, aeque perfecto pro an. Pro eu veniam iriure, ea iriure adipiscing efficiantur duo. Putant sadipscing eum ei, noster tamquam mnesarchum ut duo. Fugit graece laoreet nam ne, causae consectetuer in eos. Vix brute veniam equidem an, et vis velit quaeque, postulant adolescens et has.
                    </p>
                    <Carousel autoPlay="true" infiniteLoop="true" className="img2">
                        <img src="https://imgur.com/q3viDhP.jpg" alt="writing" />
                         <img src="https://imgur.com/Bu56wMf.jpg" alt="writing" />
                         <img src="https://imgur.com/gCsXfsh.jpg" alt="writing" />
                    </Carousel>
                    <br /><br />
                    <p className='text'> Lorem ipsum dolor sit amet, ad his alii mandamus, at qui amet suscipit dissentiet. Errem ceteros luptatum at vim, aeque perfecto pro an. Pro eu veniam iriure, ea iriure adipiscing efficiantur duo. Putant sadipscing eum ei, noster tamquam mnesarchum ut duo. Fugit graece laoreet nam ne, causae consectetuer in eos. Vix brute veniam equidem an, et vis velit quaeque, postulant adolescens et has.
                    </p>
                </div>
			<br/><br/>
                <div className='s'>
                <div className='sub2'> Categories </div>
                <div className='card card3'>
                <div className='row'>
                    <div className='col s3'>
                        <h4 className='im1'>Travel Photography</h4>
                        <Link to='/Art'><img className='image im' src='https://imgur.com/SfvrkQA.jpg' onMouseOver={e => (e.currentTarget.src = "https://imgur.com/7jHif73.jpg")} onMouseOut={e => (e.currentTarget.src = "https://imgur.com/IHOwbZT.jpg")} alt='art and craft' /></Link>
                    
                    </div>
                    <div className='col s3'>
                        <h4 className='im1'>Portraits</h4>
                        <Link to='/Painting'><img className='image im' src='https://imgur.com/yXslPdG.jpg'
                        onMouseOver={e => (e.currentTarget.src = "https://imgur.com/KG7vHn6.jpg")} onMouseOut={e => (e.currentTarget.src = "https://imgur.com/7fOKCUb.jpg")} alt='painting' /></Link>
                   
                   </div>
                    <div className='col s3'>
                        <h4 className='im1'>Nature Photography</h4>
                        <Link to='/Photography'><img className='image im' src='https://imgur.com/31XyE3j.jpg' onMouseOver={e => (e.currentTarget.src = 'https://imgur.com/q3viDhP.jpg')} onMouseOut={e => (e.currentTarget.src = "https://imgur.com/DEXAs24.jpg")} alt='photography' /></Link>
                    </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Home;