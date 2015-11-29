import React from 'react';
import {connect} from 'react-redux';

function mapStateToProps(state){
  return {
    savedForm: state.get('savedForm').toJS()
  }
}
@connect(mapStateToProps)
export default class LastSavedForm extends React.Component{
  render(){
    const data = JSON.stringify(this.props.savedForm || 'no saved data');
    return (
      <div>Last submitted data: {data}</div>
    );
  }
}
