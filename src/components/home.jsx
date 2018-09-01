import React from 'react';
import Tokens from './tokens/tokens_container.js';
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
        <Difficulty />
        <Tokens />
      </div>
    );
  }
}

export default Home;
