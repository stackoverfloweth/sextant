import React from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import Calendar from './Calendar'
import Team from './Team'
import Backlog from './Backlog'
import EventToolbar from './EventToolbar'

import * as EventActions from '../actions/action_event'
import * as SettingActions from '../actions/action_setting'
import * as JiraActions from '../actions/action_jira'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import SettingsModal from '../containers/SettingsModal'
import BucketView from '../containers/BucketView'

import '../styles/css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.props.fetchSettings()
  }

  toggleEventToolbar = (e) => {
    e.preventDefault()
    if (this.props.toolbarEvent) {
      this.props.cancelEditingToolbarEvent()
    } else {
      this.props.beginEditingToolbarEvent()
    }
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
        title: "Backlog",
        content: <Backlog />
      },
    ]
  }

  render() {
    return (
      <div className="sextant-app">
        <Navbar addEvent={this.toggleEventToolbar}
          openSettings={this.openSettingsModal}
          toolbarEvent={this.props.toolbarEvent} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3 d-none d-sm-block">
              <Sidebar tabs={this.getSideBarTabs()} />
            </div>
            <div className="col-sm-9">
              {this.props.toolbarEvent
                ? <EventToolbar
                  onClose={this.cancelEventEdit}
                  onSubmit={this.submitEventEdit}
                />
                : null}
              {this.props.toolbarEvent
                ? <Calendar />
                : <BucketView />
              }
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
  toolbarEvent: state.event.toolbarEvent,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  beginEditingToolbarEvent: EventActions.beginEditingToolbarEvent,
  cancelEditingToolbarEvent: EventActions.cancelEditingToolbarEvent,
  showSettingsModal: SettingActions.showSettingsModal,
  fetchSettings: SettingActions.fetchSettings,
  fetchJiraBacklog: JiraActions.fetchJiraBacklog,
  fetchJiraUsers: JiraActions.fetchJiraUsers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
