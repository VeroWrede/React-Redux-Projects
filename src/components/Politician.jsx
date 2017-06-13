import React from 'react';

class Politician extends React.Component {
  render() {
    return (
      <div>
        <h1>Politics</h1>
        <hr/>
        <p>
          If you want things to change you have to change them yourself. So I stick with politics.
          It’s a dreary path, one step forwards, two steps back. Sometimes it's just the step forwards and oh, how sweet those little victories are!
          Still, it’s a stressful job with little pay. Unless I get to swim with the big fish at the top. I could take the foreign service exam and become a diplomat! Good pay, nice parties, immunity, travelling to exotic places… The life of a diplomat can be sweet and glamorous, all while bringing about great change.
          But maybe that’s the easy way out? Big change comes from below. Doesn’t the world need fighters who don’t just do it for the money?
        </p>
        <p className="buttons">
          <button
            onClick={this.props.onBackClick}>
            Back
          </button>
          <button
            onClick={this.props.onDiplomatClick}>
            Become a diplomat
          </button>
          <button
            onClick={this.props.onActivistClick}>
            Become an activist
          </button>
        </p>
        </div>
    );
  }
}

export default Politician;
