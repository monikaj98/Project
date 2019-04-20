import React, { Component } from 'react';

class AddComment1 extends Component {
	
	 // initializing the state to null values
  state= {
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
          text: ''
      })
  }
   //  Ui rendered whenever comments have to be added on any image
  render(){
    return(
      <div className='AddComment'>
          <form className="comment-form form-group" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <span htmlFor='text' className="input-group-addon text3">Comment</span>
              <input type="text" id='text' placeholder="Say something..." value={this.state.text} onChange={this.handleChange} className="form-control" />
            </div>
            <input type="submit" value="Post" className="btn red" />
          </form>
      </div>
    )
  }
}
export default AddComment1;