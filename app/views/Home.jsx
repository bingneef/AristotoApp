import React, { Component } from 'react'
import { connect } from 'react-redux'
import MatchCard from './components/MatchCard'
import { Tabs, Tab } from 'material-ui';
import { getRounds, getMatchesForRound } from '../api/rounds'
import '../stylesheets/views/home.sass';

class Home extends Component {
  constructor (props) {
    super(props)

    this.loadMatches = this.loadMatches.bind(this)
  }

  componentDidMount () {
    getRounds(this.props)
  }

  loadMatches (id) {
    getMatchesForRound(this.props, id)
  }

  render () {
    return (
      <div className="app-home">
        <Tabs>
          {
            this.props.rounds.map((round) => {
              return <Tab key={ round.id} label={ round.value} onClick={() => this.loadMatches(round.id)} />
            })
          }
        </Tabs>

        {
          this.props.currentRound &&
          this.props.currentRound.matches.map((match) => {
            return <MatchCard key={match.id} match={match} />
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rounds: state.rounds.index,
    currentRound: state.rounds.currentRound
  }
}

export default connect(mapStateToProps)(Home)
