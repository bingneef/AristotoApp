import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import '../stylesheets/views/index.sass';
import Tabbar from './Tabbar';

class Index extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='app'>
        <Tabbar />
        {
          window.navigator.standalone &&
          <div className='app-ios-space' />
        }
        <div className='app-content'>
          {
            this.props.children
          }
        </div>
      </div>
    );
  }
}
  
Index.propTypes = {
  children: PropTypes.object
};

const mapStateToProps = () => {
  return { }
};

export default connect(mapStateToProps)(Index);
