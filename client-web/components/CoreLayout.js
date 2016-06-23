import React from 'react';
import { Link } from 'react-router';

export const CoreLayout = ({ children }) => (
  <div>
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <Link to="/user">
              <li>User</li>
            </Link>
            <Link to="/item">
              <li>List Item</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
    <div className="container">
      {children}
    </div>
  </div>
);

export default CoreLayout;
