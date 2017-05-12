import React from 'react';

class Cheat extends React.Component {
  render() {
    return (
      <div>
        <h1>Cheater!</h1>
        <hr/>
        <p>
          You cheat.
        </p>
        <p className="buttons">
          <button
            onClick={this.props.onBackClick}>
            Back
          </button>
        </p>
        </div>
    );
  }
}

export default Cheat;
