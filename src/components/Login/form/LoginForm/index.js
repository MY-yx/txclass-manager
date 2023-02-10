import React, { Component } from "react";
import { createBrowserHistory } from "history";
import LoginService from "../../../../services/login";
import { trimSpace } from "../../../../utils/tools";
import './index.scss';

const loginService = new LoginService(),
  history = createBrowserHistory();
export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    // react与vue不同的是他是单向数据流; 只能通过事件来
    this.state = {
      username: '',
      password: ''
    };
  }

  onInputTyping(e) {
    const id = e.target.id,
      val = e.target.value;

    this.setState({
      [id]: val
    }, () => {
      // console.log(this.state.username, this.state.password);
    })
  }

  async onSubmit(e) {
    const { username, password } = this.state;
    if (trimSpace(username).length <= 0) {
      alert('用户名长度不正确');
      return
    }
    if (trimSpace(password).length <= 0) {
      alert('密码不能为空');
      return;
    }

    const result = await loginService.loginAction({
      username: trimSpace(username),
      password: trimSpace(password)
    });

    const { error_code, error_msg } = result;
    if (error_code !== 0) {
      alert(error_msg);
      return;
    } else {
      alert(error_msg);

      // 但是history.push方法只会改路径, 需要手动刷新 => window.location.reload();
      history.push('/');
      window.location.reload();
      return;
    }
  }

  /**
   * htmlFor: 聚焦
   * 
   */

  render() {
    return (
      <div className="login-form-wrapper">
        <div className="input-box">
          <label htmlFor="username" className="iconfont icon-user"></label>
          <input id="username" className="login-input" type="text" placeholder="管理员用户名" onChange={(e) => this.onInputTyping(e)} />
        </div>
        <div className="input-box">
          <label htmlFor="password" className="iconfont icon-lock"></label>
          <input id="password" className="login-input" type="password" placeholder="管理员密码" onChange={(e) => this.onInputTyping(e)} />
        </div>
        <div className="input-box">
          <button className="btn btn-primary" onClick={(e) => this.onSubmit(e)}>登录</button>
        </div>
      </div>
    )
  }
}