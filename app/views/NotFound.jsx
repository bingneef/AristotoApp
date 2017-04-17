import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../stylesheets/views/not-found.sass';

class NotFound extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='app-not-found'>
        <h1>You lost?</h1>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return { }
};

export default connect(mapStateToProps)(NotFound);
