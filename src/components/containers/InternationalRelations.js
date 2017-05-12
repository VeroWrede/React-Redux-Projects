import React from 'react';
import { connect } from 'react-redux';

import internationalRelations from '../InternationalRelations.jsx';
import {switchPage} from '../../actions/simpleActionCreator.js';
import pages from '../../constants/pages.js';

const mapStateToProps = function (state) {
  return {
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onBackClick: () => dispatch(switchPage(pages.ChapterOne)),
    onPoliticsClick: () => dispatch(switchPage(pages.Politician)),
    onTranslationClick: () => dispatch(switchPage(pages.Translations))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(internationalRelations);
