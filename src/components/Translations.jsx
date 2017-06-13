
import React from 'react';

class Translations extends React.Component {
  render() {
    return (
      <div>
        <h1>The translator</h1>
        <hr/>
        <p>
          Why waste away in politic-landia? I like learning languages and I’m good at it.
          Indeed my studies go well and I graduate cum laude. Soon I find a job and things go well.
          But people age and eventually I have to admit to myself that I can’t keep up with my job as an interpreter anymore.
          By now I’m married and my husband always wanted to have a family. I could work from home while raising kids.
          On the other hand I’m frightened to recede from public life the way I know it. And I don't even like children!.
          Instead, I could become a professor.
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
            Become a mum
          </button>
        </p>
        </div>
    );
  }
}

export default Translations;
