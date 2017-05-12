
import React from 'react';

class Translations extends React.Component {
  render() {
    return (
      <div>
        <h1>The translator</h1>
        <hr/>
        <p>
          You've become a translator
        </p>
        <p className="buttons">
          <button
            onClick={this.props.onBackClick}>
            Back
          </button>
          <button
            onClick={this.props.onTeacherClick}>
            Become a Teacher
          </button>
          <button
            onClick={this.props.onHomeMumClick}>
            Become a mum working from  home
          </button>
        </p>
        </div>
    );
  }
}

export default Translations;
