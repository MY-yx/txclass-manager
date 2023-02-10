import React, { Component } from 'react';
import HeaderLogo from './Logo';
import HeaderTitle from './Title';
import HeaderLogout from './Logout';

import './index.scss'

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header className='header'>
        <HeaderLogo />
        <HeaderTitle />
        <HeaderLogout />
      </header>
    )
  }
}