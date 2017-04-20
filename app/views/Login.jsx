import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from '../axios'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { browserHistory } from 'react-router'
import '../stylesheets/views/login.sass';

class Login extends Component {
  constructor (props) {
    super(props);

    this.listenToOauthDialog = this.listenToOauthDialog.bind(this)
    this.setCredentials = this.setCredentials.bind(this)
  }

  oauthLogin (type) {
    let strWindowFeatures = 'scrollbars=yes,width=500,height=500'
    let windowObjectReference = window.open(webpackEnv.SERVER_HOST + '/auth/' + type, 'Oauth', strWindowFeatures)

    let interval = setInterval(() => {
      if (windowObjectReference.closed) {
        window.removeEventListener('message', this.listenToOauthDialog.bind(this), false)
        clearInterval(interval)
      }
    }, 1000)

    window.addEventListener('message', this.listenToOauthDialog.bind(this), false)
  }
  
  listenToOauthDialog (e) {
    if (e.origin !== webpackEnv.SERVER_HOST) {
      return
    }

    let apiToken = e.data.apiToken
    this.setCredentials(apiToken)
    window.removeEventListener('message', this.listenToOauthDialog, false)
    browserHistory.push('')
  }

  setCredentials (apiToken) {
    localStorage.setItem('apiToken', apiToken)
    axios.defaults.headers.common['authorization'] = 'Token token=' + localStorage.getItem('apiToken');
  }

  render () {
    return (
      <div className="app-login">
        <div className="app-login-container">
          <h1>Aristoto</h1>
          <RaisedButton label="Facebook" fullWidth={true} primary={true} onClick={() => this.oauthLogin('facebook')} />
          <RaisedButton label="Google" fullWidth={true} secondary={true} onClick={() => this.oauthLogin('google')} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return { }
};

export default connect(mapStateToProps)(Login);
