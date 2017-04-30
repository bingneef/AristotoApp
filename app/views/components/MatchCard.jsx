import React, { Component } from 'react';
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import moment from 'moment'
import '../../stylesheets/views/components/match-card.sass';

class MatchCard extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Card key={ this.props.match.id} className='app-match-card'>
        <CardTitle 
          title={`${this.props.match.clubTeam.name} - ${this.props.match.opponentName}`} 
          subtitle={moment(this.props.match.playedAt).format('H:mm')} />
        <CardActions className='app-match-card-card-actions'>
          {
            this.props.match.prediction == 'home' ? (
              <RaisedButton 
                secondary={ true } 
                onClick={() => this.props.setPrediction(this.props.match, 'home')}
                label="Home" />
            ) : (
              <FlatButton 
                onClick={() => this.props.setPrediction(this.props.match, 'home')}
                label="Home" />
            )
          }
          {
            this.props.match.prediction == 'draw' ? (
              <RaisedButton 
                secondary={ true } 
                onClick={() => this.props.setPrediction(this.props.match, 'draw')}
                label="Draw" />
            ) : (
              <FlatButton 
                onClick={() => this.props.setPrediction(this.props.match, 'draw')}
                label="Draw" />
            )
          }
          {
            this.props.match.prediction == 'away' ? (
              <RaisedButton 
                secondary={ true } 
                onClick={() => this.props.setPrediction(this.props.match, 'away')}
                label="Away" />
            ) : (
              <FlatButton 
                onClick={() => this.props.setPrediction(this.props.match, 'away')}
                label="Away" />
            )
          }
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = () => {
  return { }
};

export default connect(mapStateToProps)(MatchCard);
