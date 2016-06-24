import React from 'react';
import { Component } from 'react';
import _ from 'lodash';

class FormComponent extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
  }

  render () {
    const {
      fields,
      handleSubmit,
      resetForm,
      invalid,
      fieldType
    } = this.props;
    // const fields = ['username', 'email', 'password', 'isAdmin'];
    return (
      <div className="row">
        <form onSubmit={handleSubmit} className="col s12">
          <div className="row">
            { fieldType === 'item' ?
              _.map(fields.item, (field, key) => (
                <div className="input-field col s6" key={key}>
                  <input type="text" className="validate" {...field}/>
                  <label for={key}>{key}</label>
                </div>
              )) :
              _.map(fields.user, (field, key) => (
                <div className="input-field col s6" key={key}>
                  <input type="text" className="validate" {...field}/>
                  <label for={key}>{key}</label>
                </div>
              ))
            }
          </div>
          <div>
            <button type="submit" >
              Submit
            </button>
            <button type="button" onClick={resetForm}>
              Clear Values
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default FormComponent;
