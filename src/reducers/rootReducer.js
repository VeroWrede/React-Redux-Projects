import actions from '../actions/actions.js';

export default function rootReducer(state = {}, action){
  switch(action.type){
    case actions.SWITCH_PAGE:
      return Object.assign({}, {page: action.page})
    default:
      return state;
  }
}
