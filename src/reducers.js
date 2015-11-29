import Immutable from 'immutable';
import {reducer as formReducer} from 'redux-form';

export const form = function (state, action) {
  return Immutable.fromJS(formReducer(state, action));
}

export function savedForm(state = Immutable.fromJS({}), action){
  if(action.type === 'savedForm'){
    return state.merge(action.data);
  }
  return state;
}
