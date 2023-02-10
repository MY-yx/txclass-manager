import React, { Component } from "react";
import Logo from "./Logo";
import LoginForm from "./form";
import './index.scss';
export default class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <Logo />
        
        <LoginForm/>
      </div>
    )
  }
}