import React from 'react';

class Diplomat extends React.Component {
  render() {
    return (
      <div>
        <h1>The diplomat</h1>
        <hr/>
        <p>
          you become a diplomat.
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

export default Diplomat;
