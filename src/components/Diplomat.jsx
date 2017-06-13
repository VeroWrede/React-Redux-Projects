import React from 'react';

class Diplomat extends React.Component {
  render() {
    return (
      <div>
        <h1>The diplomat</h1>
        <hr/>
        <p>
          To do big things you need big power. I decide to become a diplomat and after weeks of studying I finally pass the exam. I did it!
          My first job as german diplomat takes me back to Berlin. I’ve been away for a long time and adjusting is hard.
          But eventually life goes back to normal; I find my group of friends and we have our weekly outings to our favorite expensive bar.
          One day a new face joins the troupe. Freshly relocated from Bavaria is a handsome, young lawyer named Hubert. Hubert is, like me a mongrel, of German and Mexican descent. We connect immediately.
          Before the year is over we move in together. Another year and we are married. Things are good, until …
          Shortly before our first child is due I find out that Hubert is gay. I am heartbroken, he denies it. Fortunately, the child’s arrival brings us back together and I’m so busy that I forget the entire story.
          Until our second child is due and the entire story repeats itself. This time however, Hubert’s lover Olaf steps in and under rivers of tears Hubert comes out of the closet.
          Fortunately for us all we are still in Germany, and Hubert’s sexuality is quickly accepted by everyone -  except Hubert’s family, but ‘oh, well..’.
          We get used to our new life as a 5 headed family. As they say “ein Vater ist besser als kein Vater” (one father is better than no father), and just imagine how lucky our kids are to  have two!?
          My two dads aren’t the jealous type, but rather good judges of character and soon my own love life  flourishes again.
          The end
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

export default Diplomat;
