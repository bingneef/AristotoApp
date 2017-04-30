import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { getMatchesForRound, setPredictionsForRound } from '../api/rounds'
import MatchCard from './components/MatchCard'
import {List, ListItem} from 'material-ui/List'
import { currentRound } from '../actions/roundActions';
import '../stylesheets/views/round-detail.sass'

class RoundDetail extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    getMatchesForRound(this.props, this.props.params.id)
  }

  savePredictions () {
    let payload = this.props.matches.map(match => {
      return {
        matchId: match.id,
        value: match.prediction
      }
    })

    payload = payload.filter(item => item.value)

    setPredictionsForRound(this.props, this.props.params.id, payload)
  }

  setPrediction (match, value) {
    let payload = {
      id: this.props.currentRoundId,
      matches: this.props.matches
    }

    for(const roundMatch of payload.matches) {
      if (match.id === roundMatch.id) {
        if (match.prediction == value) {
          match.prediction = null
        } else {
          match.prediction = value
        }
        
        this.props.dispatch(currentRound(payload))
        this.forceUpdate()
        return
      }
    }
  }

  navigateToRounds () {
    browserHistory.push('/rounds')
  }

  render () {
    if (this.props.params.id !== this.props.currentRoundId || !this.props.matches) {
      return (
        <div />
      )
    }
    return (
      <div className="app-round-detail app-container">
        {
          this.props.matches.map(match => {
            return <MatchCard 
              key={ match.id } 
              match={ match }
              setPrediction={ this.setPrediction.bind(this) } />
          })
        }
        <div className="app-round-detail-action-buttons">
          <FlatButton label="Back" onClick={ this.navigateToRounds } />
          <RaisedButton label="Save" primary={true} onClick={ this.savePredictions.bind(this) } />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentRoundId: state.rounds.currentRoundId,
    matches: state.rounds.roundMatches
  }
}

export default connect(mapStateToProps)(RoundDetail)
