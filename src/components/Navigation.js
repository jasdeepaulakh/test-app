import React, { Component } from 'react';

class Navigation extends Component {

  render() {
    const appName = "Jalebi";
    return (
      <div class="col-sm-3 col-lg-2">
            <div class="list-group">
              <a class="list-group-item active" href="./">App: {appName}</a>
                  <a class="list-group-item" href="./">Home</a>

                  <a class="list-group-item" href="./client">Client List</a>
       
        
                  <a class="list-group-item"  href="./onboarding">Onboarding</a>
 
            </div>
          </div>
    );
  }
}

export default Navigation;
