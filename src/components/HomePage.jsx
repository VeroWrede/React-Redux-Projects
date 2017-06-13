import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Intro</h1>
        <hr/>
          <p>
            Welcome! This is a short story featuring my life and what could have been my life had I taken different choices. Of course, only the storyline holding what actually happened is true. The others are made up.
            That being said, many of the choices the reader has to take would likely have been / where actual choices I would have faced on that path. This project is still in progress and I haven’t uploaded the whole story yet.
            I hope you enjoy the read!
            Vero
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
