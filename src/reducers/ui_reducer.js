import { merge } from 'lodash';
import { UPDATE_DIFFICULTY } from '../actions/difficulty_actions.js';

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_DIFFICULTY:
      return merge({}, state, {current_difficulty: action.difficulty});
    default:
      return state;
  }
};

export default uiReducer;
