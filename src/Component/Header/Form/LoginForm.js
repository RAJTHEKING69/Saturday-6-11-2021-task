import React, { Component } from "react";
import styles from './loginform.module.css';

class LoginForm extends Component {
    state={
        email : '',
        password : '',
        emailErr : '',
        passwordErr : ''
    }

    handleChange  = (e) => {
        const {name,value} = e.target;
        this.setState({[name]:value})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.validate();
    }

    validate = () =>{
        let emailErr = '';
        let passwordErr = '';

        if(this.state.email == '' || !this.state.email.includes('@')){
            emailErr = 'Please Enter A Valid Email';
        }

        if(this.state.password=='' || this.state.password.length < 4 || this.state.password.length > 10){
            passwordErr = 'Password is incorrect';
        }

        if(emailErr || passwordErr){
            this.setState({emailErr,passwordErr})
        }
    }

  render() {
    return (
      <div className={`position-relative ${styles.LoginForm_head}`}>
          <form className={`container shadow position-absolute top-50 start-50 translate-middle ${styles.form}`} onSubmit={this.handleSubmit} noValidate>
        <div class="mb-3">
          <label for="Email" class="form-label fs-3">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            name='email'
            placeholder="Enter your Email"
            onChange={this.handleChange}
            onKeyUpCapture = {this.validate}
          />
          <p className='text-danger'>{this.state.emailErr}</p>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label fs-3">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            name='password'
            placeholder="Enter your Password"
            onChange={this.handleChange}
            onKeyUpCapture = {this.validate}

          />
          <p className='text-danger'>{this.state.passwordErr}</p>
        </div>
        <button className={`btn btn-success ${styles.btn}`}>LOGIN</button>
        </form>
      </div>
      
    );
  }
}

export default LoginForm;
