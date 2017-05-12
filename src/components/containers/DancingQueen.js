import React from 'react';
import { connect } from 'react-redux';

import dancingQueen from '../DancingQueen.jsx';
import {switchPage} from '../../actions/simpleActionCreator.js';
import pages from '../../constants/pages.js';

const mapStateToProps = function (state) {
  return {
    page: state.page
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onBackClick: () => dispatch(switchPage(pages.ChapterOne)),
    onCheatClick: () => dispatch(switchPage(pages.Cheat)),
    onMarryQuentinClick: () => dispatch(switchPage(pages.MarryQuentin)),
    onTeacherClick: () => dispatch(switchPage(pages.DanceTeacher))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(dancingQueen);
