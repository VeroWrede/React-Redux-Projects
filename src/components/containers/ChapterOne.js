import React from 'react';
import { connect } from 'react-redux';

import chapterOne from '../ChapterOne.jsx';
import {switchPage} from '../../actions/simpleActionCreator.js';
import pages from '../../constants/pages.js';

const mapStateToProps = function (state) {
  return {
    page: state.page
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onBackClick: () => dispatch(switchPage(pages.Home)),
    onInternationalRelationsClick: () => dispatch(switchPage(pages.InternationalRelations)),
    onDancingQueenClick: () => dispatch(switchPage(pages.DancingQueen)),
    onUSAClick: () => dispatch(switchPage(pages.USA))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(chapterOne);
