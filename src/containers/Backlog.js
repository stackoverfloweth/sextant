import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import ReactLoading from 'react-loading'

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
        return <div key={ticket.id} className="backlog-ticket" 
                style={{borderColor: this.getPriorityColor(ticket.fields.priority.name)}} 
                onClick={() => { this.handleTicketClick(ticket) }}>
            <div className="title"><img width="16px" src={ticket.fields.priority.iconUrl} alt={ticket.fields.priority.name}/><strong>{ticket.key}</strong></div>
            <div className="summary">{ticket.fields.summary}</div>
            <div><span>Status:</span> {ticket.fields.status.name}</div>
            <div><span>Assignee:</span> {ticket.fields.assignee ? ticket.fields.assignee.displayName : <em>unassigned</em>}</div>
            <div><span>Creator:</span> {ticket.fields.creator ? ticket.fields.creator.displayName : ""}</div>
            <div><span>Story Points:</span> {ticket.fields.customfield_10021 || <span className="html-entity">&times;</span>}</div>
        </div>
    }
    getPriorityColor(priority){
        switch(priority){
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