import React, { Component } from 'react';
import Navigation from './Navigation';
import Main from './Main';

class App extends Component {
  render() {
    const appName = "Application"
    return (
      <div class="container-fluid">
        <div class="row">
          <Navigation appName={this.props.appName} />
            <Main />
        </div>
      </div>
    );
  }
}

export default App;
