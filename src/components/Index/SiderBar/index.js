import React, { Component } from 'react';
import NavItem from './NavItem';
import { NAV } from '../../../config/config';

import './index.scss';

export default class SiderBar extends Component {
  render() {
    const { curIdx, onNavItemClick } = this.props;
    return (
      <aside className='side-bar'>
        {
          NAV.map((item, index) => {
            return (
              <NavItem
                dataItem={ item }
                key={ index }
                index={ index }
                curIdx={ curIdx }
                onNavItemClick={ onNavItemClick }
              ></NavItem>
            );
          })
        }
      </aside>
    )
  }
}

/**
 * React的v-for => 类似于ejs的写法
 * {
 *   ...
 *   => 一定要return一个jsx写法的标签 (<div> ... </div>)
 * }
 */