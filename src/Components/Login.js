import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {PostData} from '../Services/postData';
import './Login.css';

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      tenantid: '3',
      redirectToReferrer: false
    }
    this.login = this.login.bind(this);
    this.onchange = this.onchange.bind(this);
  }
  login(){
    if(this.state.email && this.state.password && this.state.tenantid){
      PostData('login/password',this.state).then((result) => {
       let responseJson = result;
       if(responseJson.userData){         
         sessionStorage.setItem('userData',JSON.stringify(responseJson));
         this.setState({redirectToReferrer: true});
       }
       
      });
    }
    }

    onchange(e){
      this.setState({[e.target.name]: e.target.value})
    }
    render(){
      if (this.state.redirectToReferrer) {
        return (<Redirect to={'/Tasks'}/>)
      }
     
      if(sessionStorage.getItem('userData')){
        return (<Redirect to={'/Tasks'}/>)
      }
  return (
    
    <div className="card mt-4 mr-3 ml-3">
    <div className="card-body">
  
    <div className="login-form">
      <form onSubmit = {this.login}>
      <img className="card-img-top" src="/kog_logo_flat@3x.png" alt=""/>
  
      <div className="social-icon">
          <button type="button mb-3"><span className="input-icon"><img  src="/assets/icons/othersize/google-favicon.png" alt="" />&nbsp;</span>Login With Google</button>
          <button type="button"><span className="input-icon"><img  src="/assets/icons/othersize/microsoft.png" alt="" />&nbsp;</span>Login With Office 365</button>
        </div>
        <div className="seperator"><b>or</b></div>
      <div className="form-group">
          <input type="email" name="email" placeholder="Your Employee ID" onChange = {this.onchange}/>
          <span className="input-icon"><img  src="/assets/icons/24/icon-24-person-grey.png" alt=""/></span>
        </div>
        <div className="form-group">
          <input type="password" name="password" placeholder="Your Password" onChange = {this.onchange}/>
          <span className="input-icon"><img src="/assets/icons/24/icon-24-password.png" alt=""/></span>
        </div>
        <button className="login-btn">Login</button> 
      </form>
      </div>
  
    </div>
    </div>

    );
}
}

export default Login;