import React from 'react';
import { Component } from 'react';

class ItemsComponent extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    // this.props.fetchUpdatedProducts();
  }

  render () {
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
                {/*Map function here*/}
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                  <td>$0.87</td>
                  <td>$0.87</td>
                  <td>$0.87</td>
                  <td>false</td>
                  <td><a className="waves-effect waves-light btn">Remove</a></td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$0.87</td>
                  <td>$0.87</td>
                  <td>$0.87</td>
                  <td>$3.76</td>
                  <td>false</td>
                  <td><a className="waves-effect waves-light btn">Remove</a></td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$0.87</td>
                  <td>$0.87</td>
                  <td>$0.87</td>
                  <td>$7.00</td>
                  <td>false</td>
                  <td><a className="waves-effect waves-light btn">Remove</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemsComponent;
