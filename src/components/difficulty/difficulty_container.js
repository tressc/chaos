import { connect } from 'react-redux';
import Difficulty from './difficulty.jsx';
import {
  updateDifficulty
} from '../../actions/difficulty_actions.js';

const msp = (state) => {
  const current_difficulty = state.ui.current_difficulty;
  return {
    current_difficulty
  };
};

const mdp = (dispatch) => {
  return({
    updateDifficulty: (difficulty) => dispatch(updateDifficulty(difficulty)),
  });
};

export default connect(msp, mdp)(Difficulty);
