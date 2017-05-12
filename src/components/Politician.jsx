import React from 'react';

class Politician extends React.Component {
  render() {
    return (
      <div>
        <h1>Politics</h1>
        <hr/>
        <p>
          you become a politician.
        </p>
        <p className="buttons">
          <button
            onClick={this.props.onBackClick}>
            Back
          </button>
          <button
            onClick={this.props.onDiplomatClick}>
            Become a diplomat
          </button>
          <button
            onClick={this.props.onActivistClick}>
            Become an activist
          </button>
        </p>
        </div>
    );
  }
}

export default Politician;
