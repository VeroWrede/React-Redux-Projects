import React from 'react';
import { connect } from 'react-redux';

import usa from '../MoveToUS.jsx';
import {switchPage} from '../../actions/simpleActionCreator.js';
import pages from '../../constants/pages.js';

const mapStateToProps = function (state) {
  return {
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onBackClick: () => dispatch(switchPage(pages.ChapterOne)),
    onBenClick: () => dispatch(switchPage(pages.Ben)),
    onAlexClick: () => dispatch(switchPage(pages.Alex))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(usa);
