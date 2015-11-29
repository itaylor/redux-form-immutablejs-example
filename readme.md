###redux-form with immutablejs example

Shows how to use redux-form with a store that uses an immutable object as the state object in the store.

###Key parts
Using the getFormState option to the reduxForm decorator to transform the immutable state to a JS object
```
@reduxForm({
  form:'simple',
  fields:['firstName'],
  getFormState: (state, reduxMountPoint) => state.get(reduxMountPoint).toJS()
})
```

Wrapping the form reducer in a function to transform the form state into an immutable object.

```
import {reducer as formReducer} from 'redux-form';

export const form = function (state, action) {
  return Immutable.fromJS(formReducer(state, action));
}
```

###Using
```
git clone https://github.com/itaylor/redux-form-immutablejs-example.git
cd redux-form-immutablejs-example
npm install
npm start
```
Then open http://localhost:3000

###Implementation quirks
This uses babel 5.8 because it uses decorators and they're still broken in babel 6 https://phabricator.babeljs.io/T2645
