import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as EventActions from '../actions/action_event'
import * as JiraActions from '../actions/action_jira'

class Backlog extends React.Component {
    handleTicketClick = (ticket) => {
        if (this.props.eventCurrentlyBeingEdited) {
            this.props.editJiraTicketOnEvent(ticket)
        }
    }
    fetchBacklog = () => {
        this.props.fetchJiraBacklog(this.props.settings);
    }
    getBacklogList = () => {
        return (
            <ul className="list-group">
                {this.props.backlog.map(ticket => this.getTicketHtml(ticket))}
            </ul>
        )
    }
    getTicketHtml(ticket) {
        return <li className="ticket" key={ticket.id} onClick={() => { this.handleTicketClick(ticket) }}>
            <span className="key">{ticket.key}</span>
        </li>
    }
    render() {
        if (!this.props.settings.jiraUrl || !this.props.settings.basicToken) {
            return <div />
        } else if (!this.props.backlog) {
            this.fetchBacklog()
            return <div />
        } 

        return (
            <div className="backlog sticky-top row">
                <div className="col">
                    {this.getBacklogList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    backlog: state.jira.backlog,
    settings: state.settings,
    eventCurrentlyBeingEdited: state.eventCurrentlyBeingEdited,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    editJiraTicketOnEvent: EventActions.editJiraTicketOnEvent,
    fetchJiraBacklog: JiraActions.fetchJiraBacklog,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Backlog)