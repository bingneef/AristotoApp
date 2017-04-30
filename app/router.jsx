import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Router, Route, browserHistory, IndexRedirect } from 'react-router'

import Index from './views/Index';
import Login from './views/Login';
import Logout from './views/Logout';
import Home from './views/Home';
import Leaderboard from './views/Leaderboard';
import RouterContainer from './views/RouterContainer';
import RoundList from './views/RoundList';
import RoundDetail from './views/RoundDetail';
import NotFound from './views/NotFound';

class Routes extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    if (!this.props.rehydrated) {
      return (
        <div />
      )
    }

    return (
      <Router history={ browserHistory }>
        <Route path='login' component={ Login } />
        <Route path='logout' component={ Logout } />

        <Route path='/' component={ Index } >
          <IndexRedirect to='rounds' />
          <Route path='rounds' component={ RouterContainer }>
            <IndexRedirect to='overview' />
            <Route path='overview' component={ RoundList } />
            <Route path=':id' component={ RoundDetail } />
          </Route>
          <Route path='leaderboard' component={ Leaderboard } />
          <Route path='account' component={ NotFound } />
        </Route>
        <Route path='**' component={ NotFound } />
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rehydrated: state.rehydrated.finished,
  }
};

Routes.propTypes = {
  rehydrated: PropTypes.bool
};

export default connect(mapStateToProps)(Routes);
