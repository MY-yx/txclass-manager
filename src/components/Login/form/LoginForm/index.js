import React, { Component } from "react";

import './index.scss';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="login-form-wrapper">
        <div className="input-box">
          <i className="iconfont icon-user"></i>
          <input className="login-input" type="text" placeholder="管理员用户名" />
        </div>
        <div className="input-box">
          <i className="iconfont icon-lock"></i>
          <input className="login-input" type="password" placeholder="管理员密码" />
        </div>
        <div className="input-box">
          <button className="btn btn-primary">登录</button>
        </div>
      </div>
    )
  }
}