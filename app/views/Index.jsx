import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton';
import AppDrawer from './components/AppDrawer'
import '../stylesheets/views/index.sass';

class Index extends Component {
  constructor (props) {
    super(props);

    this.state = {
      drawerOpen: false
    }
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
      </div>
    )
  }
}
  
Index.propTypes = {
  children: PropTypes.object
};

const mapStateToProps = () => {
  return { }
};

export default connect(mapStateToProps)(Index);
