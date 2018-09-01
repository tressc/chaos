import { connect } from 'react-redux';
import Tokens from './tokens.jsx';

const msp = (state) => {
  // TODO: this should fetch from UI > TOKEN POOL,
  // which should get set when the difficulty is set.
  // This provides an object that can be modified.
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
