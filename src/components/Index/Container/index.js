import React, { Component } from 'react';
import { Outlet } from 'react-router';
import './index.scss';

export default class Container extends Component {
  render() {
    return (
      <div className='board-container'>
        <Outlet></Outlet>
      </div>
    )
  }
}