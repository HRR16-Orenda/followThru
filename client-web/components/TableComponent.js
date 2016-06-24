import React from 'react';
import { Component } from 'react';
import _ from 'lodash';

class TableComponent extends Component {
  constructor(props){
    super(props);
  }

  renderTable () {
    const { items, type } = this.props;
    console.log('called with', items);
    if(type === 'items') {
      return items.map((item, i) => {
        return (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.content}</td>
            <td>{item.completed.toString()}</td>
            <td>{item.category}</td>
            <td>{item.subcategory}</td>
            <td>{item.url}</td>
            <td>{item.created_at}</td>
            <td>{item.recommended_by_id}</td>
            <td>{item.user_id}</td>
            <td><a className="waves-effect waves-light btn">Remove</a></td>
          </tr>
        )
      })
    } else if(type === 'users') {
      return items.map((item, i) => {
        return (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.isAdmin.toString()}</td>
            <td>{item.created_at}</td>
            <td><a className="waves-effect waves-light btn">Remove</a></td>
          </tr>
        )
      })
    }
  }

  render () {
    const { fields } = this.props;
    return (
      <div className="row">
        <div className="col s12">
          <table className="highlight">
            <thead>
              <tr>
                {fields.map((field, i) => (
                  <th data-field={i} key={i}>{field}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {this.renderTable()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TableComponent;
