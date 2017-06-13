import React from 'react';

class Teacher extends React.Component {
  render() {
    return (
      <div>
        <h1>The Teacher</h1>
        <hr/>
        <p>
          Teaching it is. Like my own mother I find myself in the world of teachers and I love it.
          My Husband has given up on the idea of having a family. Instead we use our income to travel the world. And I of course get a dog and a cat.
          We buy a little house in Yvoire, France and I when we retire to live there permanently I open a little chocolate store. With all the tourists my language skills come in handy.
          I wholeheartedly recommend a visit to this beautiful little medieval village of Yvoire, it must be one the most beautiful places in the world.
          The end.
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
