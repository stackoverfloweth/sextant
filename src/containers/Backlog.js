import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import ReactLoading from 'react-loading'
import IssueModal from '../components/IssueModal'

import * as EventActions from '../actions/action_event'
import * as JiraActions from '../actions/action_jira'

class Backlog extends React.Component {
    handleTicketClick = (ticket) => {
        if (this.props.toolbarEvent) {
            this.props.editJiraTicketOnToolbarEvent(ticket)
        } else {
            this.props.viewEvent(this.props.settings, ticket)
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
        return <div key={ticket.id} className="backlog-ticket"
            style={{ borderColor: this.getPriorityColor(ticket.priority.name) }}
            onClick={() => { this.handleTicketClick(ticket) }}>
            <div className="title"><img width="16px" src={ticket.priority.iconUrl} alt={ticket.priority.name} /><strong>{ticket.key}</strong></div>
            <div className="summary">{ticket.summary}</div>
            <div><span>Status:</span> {ticket.status}</div>
            <div><span>Assignee:</span> {ticket.assignee ? ticket.assignee.displayName : <em>unassigned</em>}</div>
            <div><span>Creator:</span> {ticket.creator ? ticket.creator.displayName : ""}</div>
            <div><span>Story Points:</span> {ticket.storyPoints || <span className="html-entity">&times;</span>}</div>
        </div>
    }
    getPriorityColor(priority) {
        switch (priority) {
            case "Critical":
                return "#cd1e20";
            case "High":
                return "#ea4646";
            case "Medium":
                return "#e68941";
            default:
                return "#2b8736";
        }
    }
    getLoadingElement() {
        return <div className="d-flex justify-content-center p-5">
            <ReactLoading type="cubes" color="#fff" height={20} width={50} />
        </div>

    }
    render() {
        if (!this.props.settings.jiraUrl || !this.props.settings.basicToken) {
            return this.getLoadingElement()
        } else if (!this.props.backlog) {
            this.fetchBacklog()
            return this.getLoadingElement()
        }

        return (
            <div className="backlog row">
                {this.props.openEvent && <IssueModal onCancel={this.props.closeEvent} event={this.props.openEvent}/>}
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
    toolbarEvent: state.event.toolbarEvent,
    openEvent: state.event.openEvent,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    editJiraTicketOnToolbarEvent: EventActions.editJiraTicketOnToolbarEvent,
    viewEvent: EventActions.viewEvent,
    closeEvent: EventActions.closeEvent,
    fetchJiraBacklog: JiraActions.fetchJiraBacklog,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Backlog)