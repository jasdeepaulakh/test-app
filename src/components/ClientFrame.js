import React, { Component } from 'react';
import ClientList from './ClientList';
import ClientDetails from './ClientDetails';

class ClientFrame extends Component {

  render() {
    return (
        <div>
        <div class="col-sm-5 col-lg-5">
            <a href="" class="list-group-item active">Client List</a>
            <ClientList clientList={this.props.clientList}/>

        </div>

        <div class="col-sm-7 col-lg-7">
          <ClientDetails />
        </div>
        </div>

    );
  }
}

export default ClientFrame;
