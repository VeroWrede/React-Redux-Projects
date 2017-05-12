import React from 'react';
import { connect } from 'react-redux';

import homePage from '../HomePage.jsx';
import {switchPage} from '../../actions/simpleActionCreator.js';
import pages from '../../constants/pages.js';

const mapStateToProps = function (state) {
  return {
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onStartClick: () => dispatch(switchPage(pages.ChapterOne)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(homePage);
