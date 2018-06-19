import React from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import Calendar from './Calendar'
import Team from './Team'
import EventToolbar from './EventToolbar'

import * as EventActions from '../actions/action_event'
import * as SettingActions from '../actions/action_setting'
import * as JiraActions from '../actions/action_jira'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SettingsModal from '../containers/SettingsModal'

import '../styles/css/App.css';

class App extends React.Component {
  constructor(props){
    super(props)

    this.props.fetchSettings()
    // this.props.fetchJiraBacklog();
  }

  openEventToolbar = (e) => {
    e.preventDefault()
    this.props.beginEditingEvent()
  }
  openSettingsModal = (e) => {
    e.preventDefault()
    this.props.showSettingsModal()
  }
  getSideBarTabs = () => {
    return [
      {
        title: "Members",
        content: <Team />
      },
      {
        title: "Tickets",
        content: <div>Tickets Content</div>
      },
    ]
  }

  render() {
    return (
      <div className="sextant-app">
        <Navbar addEvent={this.openEventToolbar}
          openSettings={this.openSettingsModal} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 d-none d-sm-block">
              <Sidebar  tabs={this.getSideBarTabs()}/>
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
  fetchJiraBacklog: JiraActions.fetchJiraBacklog,
  fetchJiraUsers: JiraActions.fetchJiraUsers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
