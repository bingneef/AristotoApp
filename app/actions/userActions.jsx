const UserActions = {
  CURRENT_USER: 'CURRENT_USER'
};

const currentUser = (user) => {
  const obj = {
    type: UserActions.CURRENT_USER,
    user
  }
  return obj
}

export { UserActions, currentUser }
