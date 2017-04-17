import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <h1>Awesomeness by Creative Developers</h1>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return { }
};

export default connect(mapStateToProps)(Home);
