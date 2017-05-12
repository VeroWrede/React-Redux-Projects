import actions from './actions.js';

export function switchPage(page){
  return {type: actions.SWITCH_PAGE, page}
}
