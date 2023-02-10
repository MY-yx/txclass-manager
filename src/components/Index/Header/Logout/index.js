import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import LoginService from '../../../../services/login';

import './index.scss';

const loginService = new LoginService(),
  history = createBrowserHistory();

export default class HeaderLogout extends Component {
  async submitLogout() {
    const cfm = window.confirm('确认退出登录吗?');

    if (cfm) {
      const result = await loginService.logoutAction();

      const { error_code, error_msg } = result;
      if (error_code === 0) {
        alert(error_msg);
        history.push('/Login');
        window.location.reload();
      }
    }
  }

  render() {
    return (
      <span className='header-logout' onClick={ (e) => this.submitLogout(e)}>登出</span>
    )
  }
}