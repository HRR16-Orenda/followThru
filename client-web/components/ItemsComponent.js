import React from 'react';
import { Component } from 'react';

class ItemsComponent extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchItem();
  }

  render () {
    const { items } = this.props;
    console.log(items);
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <h3>
              Item List
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <table className="highlight">
              <thead>
                <tr>
                  <th data-field="id">No.</th>
                  <th data-field="title">Title</th>
                  <th data-field="content">Content</th>
                  <th data-field="completed">Completed</th>
                  <th data-field="category">Category</th>
                  <th data-field="sub-category">Sub Category</th>
                  <th data-field="url">url</th>
                </tr>
              </thead>

              <tbody>
                {items.map(item => {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td>{item.content}</td>
                      <td>{item.completed}</td>
                      <td>{item.category}</td>
                      <td>{item.subcategory}</td>
                      <td>{item.url}</td>
                      <td><a className="waves-effect waves-light btn">Remove</a></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemsComponent;
