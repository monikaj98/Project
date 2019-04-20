import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Login extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["emailid"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Welcome to SnapSkill");
          this.props.history.push("/timeline");
      }
        

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div className='login card'>
     <div>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
            
            <span className="label" id="regi1"> Enter your E-mail: </span>
            <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
            <div className="errorMsg">{this.state.errors.emailid}</div>
            <span className="label" id="regi1"> Set your Password: </span>
            <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.password}</div>
            <button className="reg" id="regi2"> Login </button> <br /> <br />
            <Link to='/Register'><span className="foot" id="regi"> New to SnapSkill? Register here </span></Link>
        </form>
    </div>
</div>

      );
  }


}

export default Login;