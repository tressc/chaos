import React from 'react';
import Bag from './bag/bag.jsx';
import Log from './log/log.jsx';
import Tokens from './tokens/tokens.jsx';
import Difficulty from './difficulty/difficulty_container.js';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
      current_scenario: "Choose a scenario to begin.",
      dropdown: "dropdown-on",
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Difficulty />
          <Bag />
          <Log />
          <Tokens />
        </div>
      </div>
    );
  }
}

export default Home;
