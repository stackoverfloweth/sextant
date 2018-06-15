import React from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import Calendar from './Calendar'
import Team from './Team'
import EventToolbar from './EventToolbar'

import * as EventActions from '../actions/action_event'
import * as SettingActions from '../actions/action_setting'

import Navbar from '../components/Navbar'
import SettingsModal from '../containers/SettingsModal'

import '../styles/css/App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.props.fetchSettings()
  }

  openEventToolbar = (e) => {
    e.preventDefault()
    this.props.beginEditingEvent()
  }
  openSettingsModal = (e) => {
    e.preventDefault()
    this.props.showSettingsModal()
  }

  render() {
    return (
      <div className="sextant-app">
        <Navbar addEvent={this.openEventToolbar}
          openSettings={this.openSettingsModal} />
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
          <div id="modal-wrapper">
            {this.props.settings.showModal
              ? <SettingsModal />
              : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
  team: state.team,
  eventCurrentlyBeingEdited: state.eventCurrentlyBeingEdited,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  beginEditingEvent: EventActions.beginEditingEvent,
  showSettingsModal: SettingActions.showSettingsModal,
  fetchSettings: SettingActions.fetchSettings,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
