import React from 'react';
import Action from './action.jsx';
import Logs from './logs.jsx';
import Tokens from './tokens.jsx';

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
          <Action />
          <Logs />
          <Tokens />
        </div>
      </div>
    );
  }
}

export default Home;
