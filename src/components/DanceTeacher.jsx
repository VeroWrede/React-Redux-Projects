import React from 'react';

class DanceTeacher extends React.Component {
  render() {
    return (
      <div>
        <h1>The Dance Teacher</h1>
        <hr/>
        <p>
          You've become a dance teacher.
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

export default DanceTeacher;
