import React, { Component } from "react";
import { createBrowserHistory } from "history";
import LoginService from "../services/login";
import Login from "components/Login";

const history = createBrowserHistory(),
  loginService = new LoginService();

export default class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  async loginCheck() {
    const result = await loginService.loginCheck();

    if (result.error_code === 10007) {
      // 登录成功
      history.push('/');
      window.location.reload();
    } else {
      alert('用户未登录');
    }
  }

  // 组件挂载时 ==== mounted
  componentDidMount() {
    this.loginCheck();
  }

  render() {

    return (
      <div className="container">
        <Login />
      </div>
    )
  }
}