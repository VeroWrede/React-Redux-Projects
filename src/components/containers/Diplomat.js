import React from 'react';
import { connect } from 'react-redux';

import diplomat from '../Diplomat.jsx';
import {switchPage} from '../../actions/simpleActionCreator.js';
import pages from '../../constants/pages.js';

const mapStateToProps = function (state) {
  return {
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onBackClick: () => dispatch(switchPage(pages.Politician))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(diplomat);
