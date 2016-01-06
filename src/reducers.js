import Immutable from 'immutable';
import {reducer as formReducer} from 'redux-form';

export function form(state = Immutable.fromJS({}), action) {
  return Immutable.fromJS(formReducer(state.toJS(), action));
}

export function savedForm(state = Immutable.fromJS({}), action){
  if(action.type === 'savedForm'){
    return state.merge(action.data);
  }
  return state;
}
