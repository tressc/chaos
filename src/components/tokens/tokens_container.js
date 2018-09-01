import { connect } from 'react-redux';
import Tokens from './tokens.jsx';

const msp = (state) => {
  const current_difficulty = state.ui.current_difficulty;
  const tokens = state.static.difficulties[current_difficulty];
  const tokensArr = Object.keys(tokens);
  const tokenImgs = state.static.token_imgs;
  return {
    tokenImgs,
    tokens,
    tokensArr,
  };
};

const mdp = (dispatch) => {
  return({
    // updateDifficulty: (difficulty) => dispatch(updateDifficulty(difficulty)),
  });
};

export default connect(msp, mdp)(Tokens);
