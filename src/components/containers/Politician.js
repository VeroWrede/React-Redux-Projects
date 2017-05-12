import React from 'react';
import { connect } from 'react-redux';

import politician from '../Politician.jsx';
import {switchPage} from '../../actions/simpleActionCreator.js';
import pages from '../../constants/pages.js';

const mapStateToProps = function (state) {
  return {
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onBackClick: () => dispatch(switchPage(pages.InternationalRelations)),
    onDiplomatClick: () => dispatch(switchPage(pages.Diplomat)),
    onActivistClick: () => dispatch(switchPage(pages.Activist))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(politician);
