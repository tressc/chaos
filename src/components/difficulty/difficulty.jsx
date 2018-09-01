import React from 'react';

class Difficulty extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.current_difficulty);
    this.changeDifficulty = this.changeDifficulty.bind(this);
  }

  changeDifficulty(difficulty) {
    return () => {
      this.props.updateDifficulty(difficulty);
    };
  }

  diffSelected(difficulty) {
    if (difficulty === this.props.current_difficulty) {
      return "diff-selected";
    }
  }

  render() {
    return (
      <div className="difficulty col-sm-4">
          <div
            className={ this.diffSelected("easy") }
            onClick={ this.changeDifficulty("easy") }
            >easy</div>
          <div
            className={ this.diffSelected("standard") }
            onClick={ this.changeDifficulty("standard") }
            >standard</div>
          <div
            className={ this.diffSelected("hard") }
            onClick={ this.changeDifficulty("hard") }
            >hard</div>
          <div
            className={ this.diffSelected("expert") }
            onClick={ this.changeDifficulty("expert") }
            >expert</div>
      </div>
    );
  }
}

export default Difficulty;
