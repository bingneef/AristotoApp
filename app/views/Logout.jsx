import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { logout } from '../api/user'

class Logout extends Component {
  constructor (props) {
    super(props);
  }

  componentWillMount () {
    logout(this.props).then(() => {
      localStorage.clear()
      browserHistory.push('/login')
    })
  }

  render () {
    return (
      <div />
    );
  }
}

const mapStateToProps = () => {
  return { }
};

export default connect(mapStateToProps)(Logout);
