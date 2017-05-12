import React from 'react';

class ChapterOne extends React.Component {
  render() {
    return (
      <div>
        <h1>Chapter One</h1>
        <hr/>
        <p>
          start, geneva. three choices: uni geneva, dancing, US
        </p>
        <p className="buttons">
          <button
            onClick={this.props.onBackClick}>
            Back
          </button>
          <button
            onClick={this.props.onInternationalRelationsClick}>
            Study International Relations
          </button>
          <button
            onClick={this.props.onDancingQueenClick}>
            Become a Dancing Queen
          </button>
          <button
            onClick={this.props.onUSAClick}>
            Move to the US
          </button>
        </p>
      </div>
    );
  }
}

export default ChapterOne;
