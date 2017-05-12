import React from 'react';

class Ben extends React.Component {
  render() {
    return (
      <div>
        <h1>Ben</h1>
        <hr/>
        <p>
          you're dating Ben.
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

export default Ben;
