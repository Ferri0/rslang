const setShowAuth = (value) => ({
  type: 'SET_SHOW_AUTH',
  payload: value,
});

const setAuthorized = (value) => ({
  type: 'SET_AUTHORIZED',
  payload: value,
});

const setCurrentUser = (value) => ({
  type: 'SET_CURRENT_USER',
  payload: value,
});

export { setShowAuth, setAuthorized, setCurrentUser };
