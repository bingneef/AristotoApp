import { RoundActions } from '../actions/roundActions';

const initialState = {
  index: [],
  currentRoundId: null,
  roundMatches: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case RoundActions.INDEX:
      return {
        ...state,
        index: action.index
      };
    case RoundActions.CURRENT_ROUND:
      return {
        ...state,
        currentRoundId: action.currentRound.id,
        roundMatches: action.currentRound.matches
      };
    default:
      return state;
  }
}
