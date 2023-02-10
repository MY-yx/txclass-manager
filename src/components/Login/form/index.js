import React, { Component } from "react";
import LoginForm from "./LoginForm";
import Title from "./Title";
import './index.scss';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="form-wrapper">
        <Title />
        <LoginForm />
      </div>
    )
  }
}