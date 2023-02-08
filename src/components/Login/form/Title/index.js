import React, { Component } from "react";

import './index.scss';

export default class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <h1 className="title-wrapper">JS++官方网站管理后台</h1>
    )
  }
}