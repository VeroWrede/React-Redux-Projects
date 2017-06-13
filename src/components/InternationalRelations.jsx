import React from 'react';

class InternationalRelations extends React.Component {
  render() {
    return (
      <div>
        <h1>International Relations</h1>
        <hr/>
        <p>
          Yes, studying is more important. Dancing will be a hobby. Geneva is one the best places to study anything related to politics after all. My aunt is a diplomat here and she has me seriously considering a political career.
          Though it really seems to be about a bunch of selfish weirdos and sweet talkers. Just look at whats going on in the world! It's certainly a field  that requires patience and tact, a challenging position for my straight forward personality.
          During my studies I quickly picked up Japanese, my 5th language so far. I’d also love to learn Portuguese, so maybe Languages is more my thing? I could become a translator and interpreter at political conferences.
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
