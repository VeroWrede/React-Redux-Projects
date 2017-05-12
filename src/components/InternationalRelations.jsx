import React from 'react';

class InternationalRelations extends React.Component {
  render() {
    return (
      <div>
        <h1>International Relations</h1>
        <hr/>
        <p>
          you chose International Relations.
        </p>
        <p className="buttons">
          <button
            onClick={this.props.onBackClick}>
            Back
          </button>
          <button
            onClick={this.props.onPoliticsClick}>
            Become a politician
          </button><button
            onClick={this.props.onTranslationClick}>
            Become an translater
          </button>

        </p>
      </div>
    );
  }
}

export default InternationalRelations;
