import React, { Component } from 'react'
import styles from './register.module.css'

class RegistrationForm extends Component {
     state ={
         uname : '',
         email : '',
         contact : '',
         password : '',
         confirmPassword : '',
         unameErr :'',
         emailErr : '',
         contactErr : '',
         passwordErr : '',
         confirmPasswordErr : ''
     }

     handleChange = (e) => {
         const {name,value} = e.target;
         this.setState({[name]:value})
     }

     handleSubmit = (e) => {
         e.preventDefault();

         this.validate();
 
     }

     validate = () => {
         let unameErr = '';
         let emailErr = '';
         let contactErr = '';
         let passwordErr = '';
         let confirmPasswordErr = '';

         if(this.state.uname=='' || this.state.uname < 2 || this.state.uname < 10){
             unameErr = 'Please Enter A Valid Name';
         }

         if(this.state.email == '' || !this.state.email.includes('@')){
             emailErr = 'Please Enter A Valid Email';
         }

         if(this.state.contact == '' || isNaN(this.state.contact) || this.state.contact.length<10 || this.state.contact.length > 10 ) {
            contactErr = 'Please Enter A Valid Number';
        }

        if(this.state.password == '' || this.state.password.length <4 || this.state.password.length > 10){
            passwordErr = 'Password should be minimum 4 characters and maximum 10 characters';
        }

        if(this.state.confirmPassword == '' || (this.state.password == this.state.confirmPassword)){
            confirmPasswordErr = 'Password did not match';
        }
        
        if(this.state.uname || this.state.email || this.state.contact || this.state.password || this.state.confirmPassword){
            this.setState({unameErr,emailErr,contactErr,passwordErr,confirmPasswordErr})
        }
     }

    render() {
        return (
            <div>
                <div className={styles.form_heading}>
            <h3>Registration Form</h3>
                 </div>
                 <form className={styles.form} onSubmit={this.handleSubmit} noValidate>
            <label for="name">Name</label>
            <input type="text" name="uname" placeholder="Enter Your Name" onChange={this.handleChange} onKeyUp={this.validate}/>
            <p className='text-danger fs-5 m-3'>{this.state.unameErr}</p>
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Enter Your Email ID" onChange={this.handleChange} onKeyUp={this.validate}/>
            <p className='text-danger fs-5 m-3' >{this.state.emailErr}</p>
            <label for="number">Contact Number</label>
            <input type="tel" name="contact" placeholder="Enter Your Number" onChange={this.handleChange} onKeyUp={this.validate}/>
            <p className='text-danger fs-5 m-3'>{this.state.contactErr}</p>
            <label for="password">Password</label>
            <input type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} onKeyUp={this.validate}/>
            <p className='text-danger fs-5 m-3'>{this.state.passwordErr}</p>
            <label for="confirmpassword">Confirm Password</label>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange} onKeyUp={this.validate}/>
            <p className='text-danger fs-5 m-3'>{this.state.confirmPasswordErr}</p>
            <button className={styles.btn}>Submit</button>
        </form>
            </div>
        )
    }
}

export default RegistrationForm
