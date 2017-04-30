import { index, currentRound } from '../actions/roundActions';
import { addSnackbar } from '../actions/snackbarActions';
import axios from '../axios'

const mapMatches = (matches) => {
  for (const match of matches) {
    if (match.myPrediction[0] && match.myPrediction[0].value) {
      match.prediction = match.myPrediction[0].value
    } else {
      match.prediction = null
    }
  }

  return matches
}
const baseHref = '/rounds'
const getRounds = (props) => {
  axios.get(`${baseHref}/`)
  .then((response) => {
    props.dispatch(index(response.data))
  })
}

const getMatchesForRound = (props, roundId) => {
  axios.get(`${baseHref}/${roundId}/matches`)
  .then((response) => {
    const matches = mapMatches(response.data)
    const data = {
      id: roundId,
      matches: matches
    }

    props.dispatch(currentRound(data))
  })
}

const setPredictionsForRound = (props, roundId, payload) => {
  axios.post(`${baseHref}/${roundId}/predictions`, payload)
  .then((response) => {
    const matches = mapMatches(response.data)
    const data = {
      id: roundId,
      matches: matches
    }
    props.dispatch(addSnackbar('Predictions saved!'))
    props.dispatch(currentRound(data))
  })
  .catch(() => {
    props.dispatch(addSnackbar('Oops, something went wrong..'))
  })
}

export { getRounds, getMatchesForRound, setPredictionsForRound }
