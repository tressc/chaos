const uiReducer = (state = { currentUser: null }, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default uiReducer;
