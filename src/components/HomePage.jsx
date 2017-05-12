import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Intro</h1>
        <hr/>
          <p>
            This is a story book.
            I hope you enjoy the read!
          </p>
          <p className="buttons">
            <button
              onClick={this.props.onStartClick}>
              Start
            </button>
          </p>
      </div>
    );
  }
}

export default HomePage;
