import { combineReducers } from 'redux';
import scenarioReducer from './scenario_reducer.js';
import investigatorReducer from './investigator_reducer.js';
import difficultyReducer from './difficulty_reducer.js';
import tokenImgReducer from './token_img_reducer.js';

const staticReducer = combineReducers({
  scenarios: scenarioReducer,
  investigators: investigatorReducer,
  difficulties: difficultyReducer,
  token_imgs: tokenImgReducer
});

export default staticReducer;
