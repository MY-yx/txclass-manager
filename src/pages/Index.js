import React, { Component } from "react";
import { createBrowserHistory } from "history";
import LoginService from "services/login";
import Header from "components/Index/Header";
import SiderBar from "components/Index/SiderBar";
import Container from "components/Index/Container";
import { NAV } from "../config/config";

const loginService = new LoginService(),
  history = createBrowserHistory();
export default class IndexPage extends Component {
  constructor(props) {
    super(props);

    // 类似于vue里的data, 本页的数据都放这里
    this.state = {
      curIdx: 0,
      field: NAV[0].field,
      title: NAV[0].title
    };
  }

  async loginCheck() {
    const result = await loginService.loginCheck();

    if (result.error_code === 10006) {
      history.push('/Login');
    }
  }

  onNavItemClick(field, index) {
    this.setState({
      field,
      curIdx: index
    });
  }

  // 组件挂载时 ==== mounted
  componentDidMount() {
    // this.loginCheck();
  }

  render() {
    return (
      <div className="container">
        <Header history={ history } />
        <SiderBar
          curIdx={ this.state.curIdx }
          onNavItemClick={ this.onNavItemClick.bind(this) }
        />
        <Container />
      </div>
    )
  }
}