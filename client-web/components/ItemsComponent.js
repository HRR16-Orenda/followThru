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
          this is items component
        </div>
      </div>
    )
  }
}

export default ItemsComponent;
