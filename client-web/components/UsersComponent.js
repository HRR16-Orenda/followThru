import React from 'react';
import { Component } from 'react';

class UsersComponent extends Component {
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
              User List
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <table className="highlight">
              <thead>
                <tr>
                  <th data-field="id">No.</th>
                  <th data-field="name">Username</th>
                  <th data-field="email">Email</th>
                  <th data-field="admin">Admin</th>
                  <th data-field="remove">Remove</th>
                </tr>
              </thead>

              <tbody>
                {/*Map function here*/}
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                  <td>false</td>
                  <td><a className="waves-effect waves-light btn">Remove</a></td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                  <td>false</td>
                  <td><a className="waves-effect waves-light btn">Remove</a></td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
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

export default UsersComponent;