import React from 'react';

class Teacher extends React.Component {
  render() {
    return (
      <div>
        <h1>The Teacher</h1>
        <hr/>
        <p>
          You've become a teacher.
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

export default Teacher;
