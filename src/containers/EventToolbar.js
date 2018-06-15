import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as EventActions from '../actions/action_event'

class EventToolbar extends React.Component {
    constructor(props) {
        super(props);

        this.eventProps = {
            jiraTicket: "jiraTicket",
            assignee: "assignee",
            dueDate: "dueDate",
        }
    }

    getStepClassName = (target) => {
        return `event-form-item ${this.props.eventCurrentlyBeingEdited.event[target] ? "completed" : ""}`;
    }
    canClickAddEventButton = () => {
        for (var key in this.eventProps) {
            if (this.props.eventCurrentlyBeingEdited.event.hasOwnProperty(key)) {
                if (this.props.eventCurrentlyBeingEdited.event[key] == null) {
                    return false;
                }
            }
        }
        return true;
    }
    render() {
        return (
            <div className="row event-toolbar d-flex justify-content-between">
                <div className="event-form">
                    <button className={this.getStepClassName(this.eventProps.jiraTicket)} onClick={() => this.props.editJiraTicketOnEvent(null)}>
                        <span>Jira Ticket</span>
                    </button>
                    +
                    <button className={this.getStepClassName(this.eventProps.assignee)} onClick={() => this.props.editAssigneeOnEvent(null)}>
                        <span>{this.props.eventCurrentlyBeingEdited.event.assignee ? `${this.props.eventCurrentlyBeingEdited.event.assignee.firstName} ${this.props.eventCurrentlyBeingEdited.event.assignee.lastName}` : "Assignee"}</span>
                    </button>
                    +
                    <button className={this.getStepClassName(this.eventProps.dueDate)} onClick={() => this.props.editDueDateOnEvent(null)}>
                        <span>{this.props.eventCurrentlyBeingEdited.event.dueDate ? this.props.eventCurrentlyBeingEdited.event.dueDate.format("LL") : "Due Date"}</span>
                    </button>
                    +
                    <button className="event-form-item action" onClick={this.props.onSubmit} disabled={!this.canClickAddEventButton()}>
                        <span>Add to Calendar</span>
                    </button>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.cancelEditingEvent}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    eventCurrentlyBeingEdited: state.eventCurrentlyBeingEdited,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    editJiraTicketOnEvent: EventActions.editJiraTicketOnEvent,
    editAssigneeOnEvent: EventActions.editAssigneeOnEvent,
    editDueDateOnEvent: EventActions.editDueDateOnEvent,
    completeEditingEvent: EventActions.completeEditingEvent,
    cancelEditingEvent: EventActions.cancelEditingEvent,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EventToolbar)  