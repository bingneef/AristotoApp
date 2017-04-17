import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import { tabbarIcons } from './../assets/img/tabbar/index';
import '../stylesheets/views/tabbar.sass';

class Tabbar extends Component {
  constructor (props) {
    super(props);
  }


  tabIcon (icon, active) {
    let iconName = icon
    if (active) {
      iconName += 'Active'
    }
    return tabbarIcons[iconName]
  }

  render () {
    return (
      <div className='app-tabbar'>
        {
          window.navigator.standalone &&
          <div className='app-ios-space' />
        }
        <div className='app-tabbar-navitems'>
          <Link to='/timeline' activeClassName='active'>
            <img src={ this.tabIcon('time', false) } role='presentation' />
            <img className='active-icon' src={ this.tabIcon('time', true) } role='presentation' />
          </Link>

          <Link to='/leaderboard' activeClassName='active'>
            <img src={ this.tabIcon('leaderboard', false) } role='presentation' />
            <img className='active-icon' src={ this.tabIcon('leaderboard', true) } role='presentation' />
          </Link>

          <Link to='/add-match' activeClassName='active'>
            <img src={ this.tabIcon('addMatch', false) } role='presentation' />
            <img className='active-icon' src={ this.tabIcon('addMatch', true) } role='presentation' />
          </Link>

          <Link to='/my-stats' activeClassName='active'>
            <img src={ this.tabIcon('myStats', false) } role='presentation' />
            <img className='active-icon' src={ this.tabIcon('myStats', true) } role='presentation' />
          </Link>

          <Link to='/account' activeClassName='active'>
            <img src={ this.tabIcon('user', false) } role='presentation' />
            <img className='active-icon' src={ this.tabIcon('user', true) } role='presentation' />
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return { }
};

export default connect(mapStateToProps)(Tabbar);
