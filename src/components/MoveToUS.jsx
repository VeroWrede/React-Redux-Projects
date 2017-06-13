import React from 'react';

class USA extends React.Component {
  render() {
    return (
      <div>
        <h1>Welkome to the USA!</h1>
        <hr/>
        <p>
          you moved to the US.
        </p>
        <p className="buttons">
          <button
            onClick={this.props.onBackClick}>
            Back
          </button>
          <button
            onClick={this.props.onBenClick}>
            You hang out with Ben
          </button>
          <button
            onClick={this.props.onAlexClick}>
            You hang out with Alex
          </button>
        </p>
      </div>
    );
  }
}

export default USA;
