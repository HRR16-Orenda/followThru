import React from 'react';
import { Component } from 'react';

class UsersComponent extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.fetchUser();
  }

  render () {
    const { users } = this.props;
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
                </tr>
              </thead>

              <tbody>
                {users.map(user => {
                  return (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.email}</td>
                      <td>{user.username}</td>
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

export default UsersComponent;
