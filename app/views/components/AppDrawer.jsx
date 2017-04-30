import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { Drawer, MenuItem, AppBar, FontIcon } from 'material-ui';
import '../../stylesheets/views/components/drawer.sass';
import AppDrawerMenuItem from './AppDrawerMenuItem'
import Avatar from 'material-ui/Avatar'

class AppDrawer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      open: false,
      docked: document.body.clientWidth >= 768
    }

    this.toggleDrawer = this.toggleDrawer.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.navItems = [
      {
        path: '/rounds',
        icon: 'explore',
        title: 'Voorspellingen'
      },
      {
        path: '/leaderboard',
        icon: 'show_chart',
        title: 'Leaderboard'
      },
      {
        path: '/account',
        icon: 'person',
        title: 'Account'
      }
    ]
  }

  toggleDrawer () {
    this.setState({
      open: !this.state.open
    })
  }

  handleClose () {
    this.setState({
      open: false
    }) 
  }

  handleChange (open) {
    this.setState({
      open: open
    }) 
  }

  updateDimensions () {
    this.setState({
      docked: document.body.clientWidth >= 768
    })
  }

  componentDidMount () {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render () {
    return (
      <div className="app-drawer">
        <Drawer 
          open={this.state.open || this.state.docked}
          docked={this.state.docked}
          onRequestChange={(open) => this.handleChange(open)} >
          { 
            this.state.docked &&
            <AppBar 
              showMenuIconButton={false} />
          }
          {
            this.navItems.map((item, index) => {
              return <AppDrawerMenuItem
                key={index}
                handleClick={() => this.handleChange(false)}
                path={ item.path }
                title={ item.title }
                icon={ item.icon } />
            })
          }
        </Drawer>

        <AppBar 
            title="Aristoto" 
            showMenuIconButton={ !this.state.docked }
            onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}>
            { 
              this.state.docked &&
              <div className="app-drawer-avatar-container">
                <Avatar src={this.props.currentUser.avatarUrl} />
              </div>
            }
          </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser
  }
};

export default connect(mapStateToProps)(AppDrawer);
