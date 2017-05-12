import React from 'react';

class Alex extends React.Component {
  render() {
    return (
      <div>
        <h1>Alex</h1>
        <hr/>
        <p>
          you're dating Alex.
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

export default Alex;
