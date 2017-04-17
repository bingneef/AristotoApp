import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Router, Route, browserHistory, IndexRedirect } from 'react-router'

import Index from './views/Index';
import Home from './views/Home';
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
        <Route path='login' component={ Home } />
        <Route path='logout' component={ Home } />
        <Route path='signup' component={ Home } />

        <Route path='/' component={ Index } >
          <IndexRedirect to='timeline' />
          <Route path='timeline' component={ Home } />
          <Route path='add-match' component={ Home } />
          <Route path='leaderboard' component={ Home } />
          <Route path='my-stats' component={ Home } />
          <Route path='account' component={ Home } />
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
