const RoundActions = {
  INDEX: 'INDEX',
  CURRENT_ROUND: 'CURRENT_ROUND'
};

const index = (index) => {
  const obj = {
    type: RoundActions.INDEX,
    index
  }
  return obj
}

const currentRound = (currentRound) => {
  const obj = {
    type: RoundActions.CURRENT_ROUND,
    currentRound
  }
  return obj
}

export { RoundActions, index, currentRound }
