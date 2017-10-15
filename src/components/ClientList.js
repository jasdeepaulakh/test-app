import React, { Component } from 'react';

class ClientList extends Component {

  render() {
    console.log([this.props.clientList]);
    return (
        <div>
        {this.props.clientList}
        </div>
    );
  }
}

export default ClientList;
