import React, { Component } from 'react';

class AddComment extends Component {
	// initializing the state to null values
  state= {
      name: '',
      text: ''
  		}

	// on any change in the input box, this function sets the state for that id
	handleChange= (e) => {
    this.setState({
     [e.target.id]: e.target.value
				}
			)
  		}
	
   	// function to be called on clicking the submission button
  	handleSubmit= (e) => {
		
    e.preventDefault();
    console.log('Inside AddComment Component', this.state);
		
     // We are accessing the function as a prop we passed from the parent component.
    this.props.addComment(this.state);   
      this.setState({
          name: '',
          text: ''
      })
  }
   // We are accessing the function as a prop we passed from the parent component.
  render(){
    return(
      <div className='AddComment'>
        
          <form className="comment-form form-group" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <span htmlFor='name' className="input-group-addon">Name</span>
              <input type="text" id='name' placeholder="Your name" value={this.state.name} onChange={this.handleChange} className="form-control" />
            </div>
            <div className="input-group">
              <span htmlFor='text' className="input-group-addon">Comment</span>
              <input type="text" id='text' placeholder="Say something..." value={this.state.text} onChange={this.handleChange} className="form-control" />
            </div>
            <input type="submit" value="Post" className="btn btn-primary" />
          </form>
      </div>
    )
  }
}
export default AddComment;