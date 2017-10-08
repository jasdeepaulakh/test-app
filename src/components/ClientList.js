import React, { Component } from 'react';

class ClientList extends Component {

  render() {
    return (
        <div>
        {this.props.clientList}
        </div>
    );
  }
}

export default ClientList;
