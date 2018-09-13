import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import ReactLoading from 'react-loading'
import { getPriorityColor } from '../shared/issue'

import * as EventActions from '../actions/action_event'
import * as JiraActions from '../actions/action_jira'

class Backlog extends React.Component {
    handleTicketClick = (ticket) => {
        if (this.props.toolbarEvent) {
            this.props.editJiraTicketOnToolbarEvent(ticket)
        } else {
            this.props.viewEvent(ticket)
        }
    }
    fetchBacklog = () => {
        this.props.fetchJiraBacklog();
    }
    getBacklogList = () => {
        return (
            <ul className="list-group">
                {(this.props.showDropArea && this.props.dragingTicketFromBucket) &&
                    <div className="backlog-ticket-drop-placeholder"
                        onDragOver={this.handleDragOver}
                        onDragLeave={this.handleDragLeave}
                        onDrop={(ev) => this.handleDrop(ev, this.props.user)}
                    >
                    </div>
                }
                {this.props.backlog.map(ticket => this.getTicketHtml(ticket))}
            </ul>
        )
    }
    startDrag(event, ticketId) {
        event.dataTransfer.setData("text", ticketId)
        this.props.showDropAreaEvent(false)
    }
    handleDragOver = (event) => {
        event.preventDefault()
    }
    handleDragLeave = (event) => {
        event.preventDefault()
        this.props.showDropAreaEvent(false)
    }
    handleDrop = (event, user) => {
        event.preventDefault()
        this.props.dragTicketFromBucket(false)
        var data = event.dataTransfer.getData("text")

        this.props.showDropAreaEvent(false)
        this.props.unassignTicketAction({
            ticketId: data,
            user: user
        })
    }

    getTicketHtml(ticket) {
        return <div key={ticket.id} className="backlog-ticket"
            draggable="true"
            onDragStart={(e) => this.startDrag(e, ticket.key)}
            style={{ borderColor: getPriorityColor(ticket.priority.name) }}
            onClick={() => { this.handleTicketClick(ticket) }}>
            <div className="title"><img width="16px" src={ticket.priority.iconUrl} alt={ticket.priority.name} /><strong>{ticket.key}</strong></div>
            <div className="summary">{ticket.summary}</div>
            <div><span>Status:</span> {ticket.status}</div>
            <div><span>Assignee:</span> {ticket.assignee ? ticket.assignee.displayName : <em>unassigned</em>}</div>
            <div><span>Creator:</span> {ticket.creator ? ticket.creator.displayName : ""}</div>
            <div><span>Story Points:</span> {ticket.storyPoints || <span className="html-entity">&times;</span>}</div>
        </div>
    }
    getLoadingElement() {
        return <div className="d-flex justify-content-center p-5">
            <ReactLoading type="cubes" color="#fff" height={20} width={50} />
        </div>

    }
    render() {
        if (!this.props.backlog) {
            this.fetchBacklog()
            return this.getLoadingElement()
        }

        return (
            <div className="backlog row"
                onDragOver={() => this.props.showDropAreaEvent(true)}
                // onDragLeave={(event) => this.showDropArea(event,false)}
                // onMouseLeave={() => this.showDropArea(false)}
                // onMouseOut={() => this.showDropArea(false)}
                // onMouseOutCapture={() => this.showDropArea(false)}
            >
                <div className="col">
                    {this.getBacklogList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    backlog: state.jira.backlog,
    toolbarEvent: state.event.toolbarEvent,
    dragingTicketFromBucket: state.event.dragTicketFromBucket,
    showDropArea: state.event.showDropArea,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    editJiraTicketOnToolbarEvent: EventActions.editJiraTicketOnToolbarEvent,
    viewEvent: EventActions.viewEvent,
    fetchJiraBacklog: JiraActions.fetchJiraBacklog,
    unassignTicketAction: JiraActions.unassignTicketAction,
    dragTicketFromBucket: EventActions.dragTicketFromBucket,
    showDropAreaEvent: EventActions.showDropAreaEvent,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Backlog)