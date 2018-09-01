import React from 'react';

class Tokens extends React.Component {
  render() {
    let tokens;
    if (this.props.tokensArr) {
      tokens = this.props.tokensArr.map(t => {
        if (this.props.tokenImgs[t]) {
          return (
            <div className="token-literal">
              <img src={ this.props.tokenImgs[t] }/>
              <div className="bubble">{ this.props.tokens[t] }</div>
            </div>
          );
        } else {
          return (
            <div className="token-literal">
              {t}
              <div className="bubble">{ this.props.tokens[t] }</div>
            </div>
          );
        }
      });
    }

    return (
      <div className="tokens row">
        { tokens }
      </div>
    );
  }
}

export default Tokens;
