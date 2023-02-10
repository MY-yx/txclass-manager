import React, { Component } from "react";
import { Outlet } from 'react-router';
import './index.scss';

export default class Board extends Component {
  render() {
    return (
      <div className="contaner-board">
        <Outlet></Outlet>
      </div>
    )
  }
}