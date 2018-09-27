import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CreateList from './stores/CreateList'
import View from './stores/View'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="container" style={{ marginTop: "45px"}} >
            <div className="row">
              <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
                <CreateList />
              </div>
              <View />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
