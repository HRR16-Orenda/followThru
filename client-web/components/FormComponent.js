import React from 'react';
import { Component } from 'react';
import _ from 'lodash';

class FormComponent extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
  }

  renderForm () {
    const { fields, fieldType } = this.props;
      return _.map(fields[fieldType], (field, key) => {
        if(key === 'isAdmin') {
          return (
            <div className="input-field col s6" key={key}>
              <label>
                <input id={key} type="checkbox" className="validate" {...field} />
                <label for={key} onClick={e => field.onChange(!field.value)}>{key}</label>
              </label>
            </div>
          )
        } else if(key === 'completed') {
          return (
            <div className="input-field col s6" key={key}>
              <label>
                <input id={key} type="checkbox" className="validate" {...field} />
                <label for={key} onClick={e => field.onChange(!field.value)}>{key}</label>
              </label>
            </div>
          )
        } else {
          return (
            <div className="input-field col s6" key={key}>
              <input type="text" className="validate" {...field}/>
              <label for={key}>{key}</label>
            </div>
          )
        }
      })
  }

  render () {
    const {
      fields,
      handleSubmit,
      resetForm,
      invalid,
      onSubmit
    } = this.props;
    console.log('this props', this.props);
    return (
      <div className="row">
        <form onSubmit={handleSubmit} className="col s12">
          <div className="row">
            {this.renderForm()}
          </div>
          <div>
            <button className="waves-effect waves-light btn" type="submit" >
              Submit
            </button>
            <button className="waves-effect waves-light btn" type="button" onClick={resetForm}>
              Clear Values
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default FormComponent;
