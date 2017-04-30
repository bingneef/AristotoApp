import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { getRounds } from '../api/rounds'
import {List, ListItem} from 'material-ui/List'
import '../stylesheets/views/round-list.sass'

class RoundList extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    getRounds(this.props)
  }

  navigateToRound (roundId) {
    browserHistory.push(`/rounds/${roundId}`)
  }

  render () {
    return (
      <div className="app-rounds">
        <List>
          {
            this.props.rounds.map(round => {
              return <ListItem key={round.id} primaryText={round.value} onClick={() => this.navigateToRound(round.id)} />
            })
          }
        </List>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    rounds: state.rounds.index
  }
}

export default connect(mapStateToProps)(RoundList)
