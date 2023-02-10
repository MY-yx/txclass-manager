import React, { Component } from 'react';
import Board from './Board';
import './index.scss';

export default class Container extends Component {
  render() {
    return (
      <div className='board-container'>
        <Board />
      </div>
    )
  }
}