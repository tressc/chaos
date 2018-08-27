import React from 'react';

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
      <div className="home">
        <select>
          <optgroup label="Night of the Zealot">
            <option value="gathering">The Gathering</option>
            <option value="midnight_masks">The Midnight Masks</option>
            <option value="devourer_below">The Devourer Below</option>
          </optgroup>
          <optgroup label="The Dunwich Legacy">
            <option value="extracurricular_activity">Extracurricular Activity</option>
            <option value="house_always_wins">The House Always Wins</option>
          </optgroup>
        </select>

        <br ></br>
        <br ></br>
        <br ></br>
        <br ></br>
        <br ></br>

        <div className="dropdown">
          <span>{this.state.current_scenario}</span>
        </div>

      </div>
    );
  }
}

export default Home;
