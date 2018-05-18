import React from 'react';
import Calendar from './components/Calendar'
import './styles/css/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Calendar></Calendar>
      </div>
    );
  }
}

export default App;
