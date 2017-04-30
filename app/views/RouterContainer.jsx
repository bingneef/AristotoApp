import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../stylesheets/views/router-container.sass'

class RouterContainer extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='app-router-container'>
        {
          this.props.children
        }
      </div>
    )
  }
}
  
RouterContainer.propTypes = {
  children: PropTypes.object
};

const mapStateToProps = () => {
  return { }
};

export default connect(mapStateToProps)(RouterContainer);
