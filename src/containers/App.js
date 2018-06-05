import React from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Calendar from './Calendar'
import Team from './Team'
import EventToolbar from '../components/EventToolbar'
import Navbar from '../components/Navbar'
import '../styles/css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.emptyEvent = {
      eventId: null,
      ticket: {},
      assignee: {},
      dueDate: null,
    }
    this.state = {
      eventCurrentlyBeingEdited: null,
    }
  }
  openEventToolbar = (e) => {
    e.preventDefault();
    this.setState({ 
      eventCurrentlyBeingEdited: this.emptyEvent,
     })
  }
  cancelEventEdit = () => {
    this.setState({ eventCurrentlyBeingEdited: null })
  }
  submitEventEdit = () => {
    console.log('yor really gud')
  }
  submitEvent
  render() {
    return (
      <div className="sextant-app">
        <div id="modal-wrapper"></div>
        <Navbar addEvent={this.openEventToolbar} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 d-none d-sm-block">
              <Team />
            </div>
            <div className="col-sm-9">
              {this.state.eventCurrentlyBeingEdited
                ? <EventToolbar 
                    onClose={this.cancelEventEdit} 
                    onSubmit={this.submitEventEdit}
                  />
                : null}
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  jira: state.jira,
  team: state.team,
  eventCurrentlyBeingEdited: state.eventCurrentlyBeingEdited
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
