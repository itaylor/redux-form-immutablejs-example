import { createStore } from 'redux';
import { combineReducers } from 'redux-immutablejs';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';

import * as reducers from './reducers.js';
import SimpleForm from './SimpleForm.js';
import LastSavedForm from './LastSavedForm.js';

const reducer = combineReducers(reducers);
const state = Immutable.fromJS({});
const store = createStore(reducer, state);
const mountNode = document.getElementById('AppContainer');

function onSubmit(data){
  store.dispatch({type:'savedForm', data})
}

function Root(props){
  return (
    <Provider className="provider" store={store}>
      <div>
        <LastSavedForm/>
        <SimpleForm onSubmit={onSubmit}/>
      </div>
    </Provider>
  );
}
ReactDOM.render(<Root/>,mountNode);
