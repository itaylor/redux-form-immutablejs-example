import Immutable from 'immutable';
import {reducer as formReducer} from 'redux-form';

export const form = formReducer;

export function savedForm(state = Immutable.fromJS({}), action){
  if(action.type === 'savedForm'){
    return state.merge(action.data);
  }
  return state;
}
