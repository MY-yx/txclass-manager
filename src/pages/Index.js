import React, { Component } from "react";

export default class IndexPage extends Component {
  constructor(props) {
    super(props);

    // 类似于vue里的data, 本页的数据都放这里
    this.state = {};
  }

  render() {
    return (
      <h1>Index Page</h1>
    )
  }
}