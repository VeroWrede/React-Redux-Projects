
import React from 'react';

class Activist extends React.Component {
  render() {
    return (
      <div>
        <h1>The activist</h1>
        <hr/>
        <p>
          No way I’m giving in to temptation! I’ll keep fighting. Not long after I take that decision I have to admit to myself that my job is anything but a fight. Writing or reviewing proposals or reports day in and day out. Nothing changes. Life seems a long congested loop of bureaucracy devouring all attempts for improvement without  ever digesting anything. I get so upset that I quit my job for the government and become an environmental activist.
          Now I’m on the streets almost everyday, protesting and educating the public and gaining followers for our various movements. When my boyfriend proposes to me at our favorite pizzeria I refuse and hold an hour long speech about the evil influence of humanity on our planet.
          There are too many of them (not me, of course, I'm innocent) and before producing more humans we need to learn to govern ourselves with discipline for else the planet will die and all children with it (in unimaginable pain and misery, naturally).
          Dear reader, I believe you have by now noticed that in this story line I’ve turned into a sour little person.
          Not long after my boyfriend leaves me. I start to adopt ever more dogs and cats from nearby shelters.
          Years later people will warn newcomers to the little village where I have taken up residence about the grumpy old granny on the corner.
          Chanting rebellious songs from the past, talking to her pets, telling anyone who passes about her days fighting for the world.
          But to all those who are nice to her pets she will give a piece of delicious homemade pie, all the while mumbeling grumpy accusations.
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

export default Activist;
