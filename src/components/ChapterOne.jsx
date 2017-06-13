import React from 'react';

class ChapterOne extends React.Component {
  render() {
    return (
      <div>
        <h1>Chapter One</h1>
        <hr/>
        <p>
          Hello. A short overview of where this story starts: I am 18 years old and just finished high school in Geneva, Switzerland.The University of Geneva accepted me to study International Relations. But I'm not sure if I want to do that.
          Fortunately, I still have a choice!
          You have to admit that Geneva is pretty cool.
          It’s also been my home for some years now. I know the argentine Tango scene around here and have a great dancing partner!
          We could try to become real dancers, maybe even win the world championship? Dancing is to me like breathing, it comes naturally and I can’t live without it. If I want to make this my career, now is the chance. But then my studies would come in last. Do I care?
          Now, my dad got a job in Washington,DC… How exciting a brand new start would be! But hush, don’t tell anyone I said so, because as a good european I’m, of course filled with prejudice.
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
