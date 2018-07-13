import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import ReactLoading from 'react-loading'

import * as EventActions from '../actions/action_event'
import * as JiraActions from '../actions/action_jira'

class Team extends React.Component {
    handleTeamMemberClick = (member) => {
        if (this.props.eventCurrentlyBeingEdited) {
            this.props.editAssigneeOnEvent(member)
        }
    }
    fetchUsers = () => {
        this.props.fetchJiraUsers(this.props.settings);
    }
    getTeamMembersList = () => {
        return (
            <ul className="list-group">
                {this.props.users.map(member => this.getMemberHtml(member))}
            </ul>
        )
    }
    getMemberHtml(member) {
        return <li className="member" key={member.emailAddress} style={{ borderColor: member.color }}
            onClick={() => { this.handleTeamMemberClick(member) }} >
            <img src={member.avatar} alt={member.displayName} />
            <div className="content">
                <div className="title">{member.displayName}</div>
                <div className="sub-content">
                    <span>Status: </span>
                    <span className={`active-indicator ${member.active ? "active" : "inactive"}`}></span>{member.active ? "Active" : "Inactive"}
                </div>
                <div className="sub-content">
                    <span>Total Points:</span>{Math.floor(Math.random() * Math.floor(20))}
                </div>
            </div>
        </li>
    }
    getLoadingElement() {
        return <div className="d-flex justify-content-center p-5">
            <ReactLoading type="cubes" color="#fff" height={20} width={50} />
        </div>

    }
    render() {
        if (!this.props.settings.jiraUrl || !this.props.settings.basicToken) {
            return this.getLoadingElement()
        } else if (!this.props.users) {
            this.fetchUsers()
            return this.getLoadingElement()
        }

        return (
            <div className="team sticky-top row">
                <div className="col">
                    {this.getTeamMembersList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.jira.users,
    settings: state.settings,
    eventCurrentlyBeingEdited: state.eventCurrentlyBeingEdited,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    editAssigneeOnEvent: EventActions.editAssigneeOnEvent,
    fetchJiraUsers: JiraActions.fetchJiraUsers,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Team)