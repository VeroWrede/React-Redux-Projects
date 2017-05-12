
import React from 'react';

class Activist extends React.Component {
  render() {
    return (
      <div>
        <h1>The activist</h1>
        <hr/>
        <p>
          you've become an activist
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

export default Activist;
