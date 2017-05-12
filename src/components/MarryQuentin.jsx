import React from 'react';

class MarryQuentin extends React.Component {
  render() {
    return (
      <div>
        <h1>Congrats!!!!</h1>
        <hr/>
        <p>
          you got married!
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

export default MarryQuentin;
