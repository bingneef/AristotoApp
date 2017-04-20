import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { Drawer, MenuItem, AppBar, FontIcon } from 'material-ui';
import '../../stylesheets/views/components/drawer-menu-item.sass';

class AppDrawerMenuItem extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <MenuItem
        className='app-drawer-menu-item'
        onTouchTap={this.props.handleClick} >
        
        <Link 
          to={ this.props.path }
          activeClassName="is-active"
          className="app-drawer-menu-item-link">
          
          <FontIcon
            className="material-icons app-drawer-menu-item-icon" >
            { this.props.icon }
          </FontIcon>
          
          <span
            className="app-drawer-menu-item-title">
            { this.props.title }
          </span>
        </Link>
      </MenuItem>
    );
  }
}

const mapStateToProps = () => {
  return { }
};

export default connect(mapStateToProps)(AppDrawerMenuItem);
