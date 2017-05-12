import React from 'react';
import { connect } from 'react-redux';

import translations from '../Translations.jsx';
import {switchPage} from '../../actions/simpleActionCreator.js';
import pages from '../../constants/pages.js';

const mapStateToProps = function (state) {
  return {
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onBackClick: () => dispatch(switchPage(pages.InternationalRelations)),
    onTeacherClick: () => dispatch(switchPage(pages.Teacher)),
    onHomeMumClick: () => dispatch(switchPage(pages.HomeMum))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(translations);
