// presentational (dumb) component
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles.css';

import pages from '../constants/pages.js';
import HomePage from './containers/HomePage.js';
import ChapterOne from './containers/ChapterOne.js';
import InternationalRelations from './containers/InternationalRelations.js';
import DancingQueen from './containers/DancingQueen.js';
import DanceTeacher from './containers/DanceTeacher.js';
import USA from './containers/MoveToUS.js';
import Politician from './containers/Politician.js';
import Diplomat from './containers/Diplomat.js';
import Activist from './containers/Activist.js';
import Translations from './containers/Translations.js';
import Teacher from './containers/Teacher.js';
import HomeMum from './containers/HomeMum.js';
import Cheat from './containers/Cheat.js';
import MarryQuentin from './containers/MarryQuentin.js';
import Ben from './containers/Ben.js';
import Alex from './containers/Alex.js';

class StoryBook extends React.Component{
  render() {
    return (
      <div >
        <div className="chapter">
          {this.renderPage()}
        </div>
      </div>
      //<Footer
    );
  }

  renderPage() {
    switch(this.props.page){
      case pages.ChapterOne:
        return <ChapterOne/>;

      case pages.InternationalRelations:
        return <InternationalRelations/>;
      case pages.Politician:
        return <Politician/>;
      case pages.Diplomat:
        return <Diplomat/>;
      case pages.Activist:
        return <Activist/>;
      case pages.Translations:
        return <Translations/>;
      case pages.Teacher:
        return <Teacher/>;
      case pages.HomeMum:
        return <HomeMum/>;

      case pages.DancingQueen:
        return <DancingQueen/>;
      case pages.Quentin:
        return <Quentin/>;
      case pages.Cheat:
        return <Cheat/>;
      case pages.MarryQuentin:
        return <MarryQuentin/>;
      case pages.DanceTeacher:
        return <DanceTeacher/>;

      case pages.USA:
        return <USA/>;
      case pages.Ben:
        return <Ben/>;
      case pages.Alex:
        return <Alex/>;

      case pages.Home:
      default:
        return <HomePage/>;
    }
  }
}

export default StoryBook;
