import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class About extends Component {
	
	// we have used it so that when we open our page it opens from the top
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div className="main">
                <div className='About'>
                    <br />
                </div>
			<br/>
			<br/>
                <div className='subabout'> About <img src="https://imgur.com/NUVy1oN.jpg" id="hills"/></div>
                <div className='card cardabout'>
                    <Carousel autoPlay="true" infiniteLoop="true" className="img1">
                        <img src="https://imgur.com/yXslPdG.jpg" alt="painting"  />
                        <img src="https://imgur.com/31XyE3j.jpg" alt="painting"  />
                        <img src="https://imgur.com/qV8uwzd.jpg" alt="painting"  />
                    </Carousel>
                    <p className='text'> Lorem ipsum dolor sit amet, ad his alii mandamus, at qui amet suscipit dissentiet. Errem ceteros luptatum at vim, aeque perfecto pro an. Pro eu veniam iriure, ea iriure adipiscing efficiantur duo. Putant sadipscing eum ei, noster tamquam mnesarchum ut duo. Fugit graece laoreet nam ne, causae consectetuer in eos. Vix brute veniam equidem an, et vis velit quaeque, postulant adolescens et has.
			   <br/>
			Lorem ipsum dolor sit amet, ad his alii mandamus, at qui amet suscipit dissentiet. Errem ceteros luptatum at vim, aeque perfecto pro an. Pro eu veniam iriure, ea iriure adipiscing efficiantur duo. Putant sadipscing eum ei, noster tamquam mnesarchum ut duo. Fugit graece laoreet nam ne, causae consectetuer in eos. Vix brute veniam equidem an, et vis velit quaeque, postulant adolescens et has.
			<br/>
			Lorem ipsum dolor sit amet, ad his alii mandamus, at qui amet suscipit dissentiet. Errem ceteros luptatum at vim, aeque perfecto pro an. Pro eu veniam iriure, ea iriure adipiscing efficiantur duo. Putant sadipscing eum ei, noster tamquam mnesarchum ut duo. Fugit graece laoreet namne, causae consectetuer in eos. Vix brute veniam equidem an, et vis velit quaeque, postulant adolescens et has.
			<br/>
			Lorem ipsum dolor sit amet, ad his alii mandamus, at qui amet suscipit dissentiet. Errem ceteros luptatum at vim, aeque perfecto pro an. Pro eu veniam iriure, ea iriure adipiscing efficiantur duo. Putant sadipscing eum ei, noster tamquam mnesarchum ut duo. Fugit graece laoreet namne, causae consectetuer in eos. Vix brute veniam equidem an, et vis velit quaeque, postulant adolescens et has.
                    </p>
                </div>
			</div>   
        );
    }
}

export default About;