
import React from 'react';

class HomeMum extends React.Component {
  render() {
    return (
      <div>
        <h1>The stay home mum</h1>
        <hr/>
        <p>
          You are a mum working from home.
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

export default HomeMum;
