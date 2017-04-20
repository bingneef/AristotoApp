import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { Tabs, Tab } from 'material-ui';
import '../stylesheets/views/leaderboard.sass';

class Leaderboard extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="app-leaderboard">
        <Tabs>
          <Tab label="Item One" >
            <div>
              <h2>Tab One</h2>
              <p>
                This is an example tab.
              </p>
              <p>
                You can put any sort of HTML or react component in here. It even keeps the component state!
              </p>
            </div>
          </Tab>
          <Tab label="Item Two" >
            <div>
              <h2>Tab Two</h2>
              <p>
                This is another example tab.
              </p>
            </div>
          </Tab>
          <Tab
            label="onActive"
          >
            <div>
              <h2>Tab Three</h2>
              <p>
                This is a third example tab.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return { }
};

export default connect(mapStateToProps)(Leaderboard);


