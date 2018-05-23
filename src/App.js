import React from 'react';

import Calendar from './components/Calendar'
import Team from './components/Team'
import Navbar from './components/Navbar'

import './styles/css/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="sextant-app">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <Team />
            </div>
            <div className="col-sm-9">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
