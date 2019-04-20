import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Comment from './Comment';
import AddComment from './AddComment';
import Upload from './Upload';
import '../App.css';


class Timeline extends Component {   
	 // initializing the state
    state = {
        img1: [1,219,'LIKE'],
        img2: [2,167,'LIKE'],
        img3: [3,200,'LIKE'],
        comments: [
          { name: 'Jim', text:'I love this place', id: 1 }
        ],
        showComm: false
    }
	// we have used it so that when we open our page it opens from the top
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    handleComm = () => {
        if(this.state.showComm===true){
            this.setState({
                showComm:false
            })
        }
        else{
            this.setState({
                showComm:true
            })
        }
    }
    handleDetail = () => {
         this.props.history.push("/Details");
    }
	// function to display comments on the image
    handleClick = (e,param) => {
       //console.log('Clicked', e[0]);
       
         // checks the state and then updates it accordingly
        if(e[2]==='LIKE'){
            const inc = e[1]+1;
            
            if(e[0]===1){
                this.setState({
                    img1: [1,inc,'UNLIKE']
                })
            }
            else if(e[0]===2){
                this.setState({
                    img2: [2,inc,'UNLIKE']
                })  
            }
            else{
                this.setState({
                img3: [3,inc,'UNLIKE']
                })
            }
        }
        
        else{
            const dec = e[1]-1;
            if(e[0]===1){
                this.setState({
                    img1: [1,dec,'LIKE']
                })  
            }
            else if(e[0]===2){
                this.setState({
                    img2: [2,dec,'LIKE']
                })  
            }
            else{
                this.setState({
                    img3: [3,dec,'LIKE']
                })
            }
        }
    
        }
      addComment = (comment) => {
        console.log('Inside App Component', comment);
        comment.id = Math.floor(Math.random() * 10);
        console.log(comment.id);
        let comments = [...this.state.comments, comment];
        this.setState({
          comments
        })
      }
       
    render() {
        return (
        <div className="row" id="homediv">
            <div className='col s7 offset-s1 card card2'>
                <div className="timeline-page">
                     <Upload />
                    <br />
                    <Link to='/Details'><img className="time" src="https://imgur.com/cEEWBf6.jpg" alt="oops! not available" /></Link>
                    <br />
                    <br />
                
                    <input type="button" value={this.state.img1[2]} className="like" onClick={this.handleClick.bind(this,this.state.img1)} />
                    <span className='like'> {this.state.img1[1]} </span>

                    <input type="button" value="Show Comments" className='like' onClick={this.handleComm}/>
                    <input type="button" value="Details" className="like" onClick={this.handleDetail} />

                    {this.state.showComm ? (
                        <div>
                            <Comment comments = {this.state.comments}/><br />
                        
                        </div>) :
                    (null)}
                    <div className='AddComment1'>
                    <AddComment addComment={this.addComment} /><br /><br />
                    </div>
					<br/>
					<br/>
						 <Link to='/Details'><img className="time" src="https://imgur.com/MGfWtPL.jpg" alt="oops! not available" /></Link>
                    <br />
                    <br />
                
                    <input type="button" value={this.state.img1[2]} className="like" onClick={this.handleClick.bind(this,this.state.img1)} />
                    <span className='like'> {this.state.img1[1]} </span>

                    <input type="button" value="Show Comments" className='like' onClick={this.handleComm}/>
                    <input type="button" value="Details" className="like" onClick={this.handleDetail} />

                    {this.state.showComm ? (
                        <div>
                            <Comment comments = {this.state.comments}/><br />
                        
                        </div>) :
                    (null)}
                    <div className='AddComment1'>
                    <AddComment addComment={this.addComment} /><br /><br />
                    </div>
					<br/>
					<br/>
						 <Link to='/Details'><img className="time" src="https://imgur.com/A8QxBZQ.jpg" alt="oops! not available" /></Link>
                    <br />
                    <br />
                
                    <input type="button" value={this.state.img1[2]} className="like" onClick={this.handleClick.bind(this,this.state.img1)} />
                    <span className='like'> {this.state.img1[1]} </span>

                    <input type="button" value="Show Comments" className='like' onClick={this.handleComm}/>
                    <input type="button" value="Details" className="like" onClick={this.handleDetail} />

                    {this.state.showComm ? (
                        <div>
                            <Comment comments = {this.state.comments}/><br />
                        
                        </div>) :
                    (null)}
                    <div className='AddComment1'>
                    <AddComment addComment={this.addComment} /><br /><br />
                    </div>
					<br/>
					<br/>
						 <Link to='/Details'><img className="time" src="https://imgur.com/QBcb3Ow.jpg" alt="oops! not available" /></Link>
                    <br />
                    <br />
                
                    <input type="button" value={this.state.img1[2]} className="like" onClick={this.handleClick.bind(this,this.state.img1)} />
                    <span className='like'> {this.state.img1[1]} </span>

                    <input type="button" value="Show Comments" className='like' onClick={this.handleComm}/>
                    <input type="button" value="Details" className="like" onClick={this.handleDetail} />

                    {this.state.showComm ? (
                        <div>
                            <Comment comments = {this.state.comments}/><br />
                        
                        </div>) :
                    (null)}
                    <div className='AddComment1'>
                    <AddComment addComment={this.addComment} /><br /><br />
                    </div>
					<br/>
					<br/>
						 <Link to='/Details'><img className="time" src="https://imgur.com/UnGk0Aj.jpg" alt="oops! not available" /></Link>
                    <br />
                    <br />
                
                    <input type="button" value={this.state.img1[2]} className="like" onClick={this.handleClick.bind(this,this.state.img1)} />
                    <span className='like'> {this.state.img1[1]} </span>

                    <input type="button" value="Show Comments" className='like' onClick={this.handleComm}/>
                    <input type="button" value="Details" className="like" onClick={this.handleDetail} />

                    {this.state.showComm ? (
                        <div>
                            <Comment comments = {this.state.comments}/><br />
                        
                        </div>) :
                    (null)}
                    <div className='AddComment1'>
                    <AddComment addComment={this.addComment} /><br /><br />
                    </div>
					<br/>
					<br/>
                 <Link to='/Details'><img className="time" src="https://imgur.com/5SbEseN.jpg" alt="oops! not available" /></Link>
                    <br />
                    <br />
                
                    <input type="button" value={this.state.img1[2]} className="like" onClick={this.handleClick.bind(this,this.state.img1)} />
                    <span className='like'> {this.state.img1[1]} </span>

                    <input type="button" value="Show Comments" className='like' onClick={this.handleComm}/>
                    <input type="button" value="Details" className="like" onClick={this.handleDetail} />

                    {this.state.showComm ? (
                        <div>
                            <Comment comments = {this.state.comments}/><br />
                        
                        </div>) :
                    (null)}
                    <div className='AddComment1'>
                    <AddComment addComment={this.addComment} /><br /><br />
                    </div>
                    <br />
                    <br />
                    <Link to='/Details'><img className="time" src="https://imgur.com/bvAdzyn.jpg" alt="oops! not available" /></Link>
                    <br />
                    <br />
                
                    <input type="button" value={this.state.img2[2]} className="like" onClick={this.handleClick.bind(this,this.state.img2)} />
                    <span className="like"> {this.state.img2[1]} </span>
                    <input type="button" value="Show Comments" className='like' onClick={this.handleComm}/>
                    <input type="button" value="Details" className="like" onClick={this.handleDetail} />    
                        
                    {this.state.showComm ? (
                        <div>
                            <Comment comments = {this.state.comments}/><br />
                        
                        </div>) :
                    (null)}
                    <div className='AddComment1'>
                    <AddComment addComment={this.addComment} /><br /><br />
                    </div>
                    <br />
                    <br />
                    <Link to='/Details'><img className="time" src="https://imgur.com/bd6k5pT.jpg" alt="oops! not available" /></Link>
                    <br />
                    <br />
                
                    <input type="button" value={this.state.img3[2]} className="like" onClick={this.handleClick.bind(this,this.state.img3)} />
                    <span className='like'> {this.state.img3[1]} </span>
                    <input type="button" value="Show Comments" className='like' onClick={this.handleComm}/>
                    <input type="button" value="Details" className="like" onClick={this.handleDetail} />
                    {this.state.showComm ? (
                        <div>
                            <Comment comments = {this.state.comments}/><br />
                        
                        </div>) :
                    (null)}
                    <div className='AddComment1'>
                    <AddComment addComment={this.addComment} /><br /><br />
                    </div>
                
                    <br />
                    <br />
                
                </div>
  				<Link to='/'><input type="button" className="logout" value="Logout" id="logout"/></Link> 
            		<br/><br/><br/>
            </div>
           
            
        </div>
        )
    }
}

export default Timeline;