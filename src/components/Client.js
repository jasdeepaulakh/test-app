import React, { Component } from 'react';
import ClientFrame from './ClientFrame';
import dataJSON from '../data.json';

class Client extends Component {

  render() {
    const data = dataJSON;
    const clientList = data.map(
      (data) => <a href="" class="list-group-item" key={data._id}>{data.company}</a>
    );
    console.log(clientList);
    return (
      <ClientFrame clientList={clientList} />
    );
  }
}


export default Client;
