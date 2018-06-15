import React from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import Calendar from './Calendar'
import Team from './Team'
import EventToolbar from '../containers/EventToolbar'
import { beginEditingEvent } from '../actions/action_event'
import Navbar from '../components/Navbar'
import '../styles/css/App.css';

class App extends React.Component {
  openEventToolbar = (e) => {
    e.preventDefault()
    this.props.beginEditingEvent()
  }

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
              {this.props.eventCurrentlyBeingEdited
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
  team: state.team,
  eventCurrentlyBeingEdited: state.eventCurrentlyBeingEdited,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  beginEditingEvent: beginEditingEvent
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
