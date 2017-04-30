import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton';
import AppDrawer from './components/AppDrawer'
import Snackbar from 'material-ui/Snackbar';
import { removeSnackbar } from '../actions/snackbarActions';
import '../stylesheets/views/index.sass';

class Index extends Component {
  constructor (props) {
    super(props);

    this.state = {
      drawerOpen: false
    }
  }

  componentWillMount () {
    if (!localStorage.getItem('apiToken')) {
      browserHistory.push('login')
    }
  }

  handleSnackbarClose () {
    this.props.dispatch(removeSnackbar())
  }

  render () {
    return (
      <div className='app'>
        <AppDrawer />

        <div className='app-content'>
          {
            this.props.children
          }
        </div>
        <Snackbar
          open={ this.props.snackbarOpen }
          message={ this.props.snackbarMessage || ' ' }
          autoHideDuration={2500}
          onRequestClose={this.handleSnackbarClose.bind(this)}
        />
      </div>
    )
  }
}
  
Index.propTypes = {
  children: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    snackbarOpen: state.snackbar.open,
    snackbarMessage: state.snackbar.message
  }
};

export default connect(mapStateToProps)(Index);
