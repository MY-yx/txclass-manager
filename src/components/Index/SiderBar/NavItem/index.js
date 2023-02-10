import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './index.scss';

export default class NavItem extends Component {
  // react设置动态class且设置数组时, 记得设置.join(), 不然会解析成: class="nav-item,nav-current"; 这也是react有问题的一个点
  render() {
    const { curIdx, index, dataItem, onNavItemClick } = this.props;
    
    return (
      <div className={ ['nav-item', index === curIdx ? 'nav-current' : ''].join(' ') }>
        <Link to={ `/${dataItem.field}` } onClick={ () => onNavItemClick(dataItem.field, index) }>
          { dataItem.title }
          <i className="iconfont icon-arrow-right"></i>
        </Link>
      </div>
    )
  }
}