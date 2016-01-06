import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';

@reduxForm({
  form:'simple',
  fields:['firstName', 'lastName'],
  getFormState: (state, reduxMountPoint) => state.get(reduxMountPoint).toJS()
})
export default class SimpleForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const { fields: {firstName, lastName}, handleSubmit } = this.props;
    return (<form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <input type="text" placeholder="First Name" {...firstName}/>
            <input type="text" placeholder="Last Name" {...lastName}/>
          </div>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    );
  }
}
