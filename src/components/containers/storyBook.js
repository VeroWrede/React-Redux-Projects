// container (smart) component, knows about redux. no jsx
import React from 'react';
import {connect} from 'react-redux';

import storyBook from '../storyBook.jsx';

const mapStateToProps = function(state) {
    return {
      page: state.page
    };
}

const mapDispatchToProps = function(dispatch){
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(storyBook);
