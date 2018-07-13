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
        return `event-form-item ${this.props.toolbarEvent[target] ? "completed" : ""}`;
    }
    canClickAddEventButton = () => {
        for (var key in this.eventProps) {
            if (this.props.toolbarEvent.hasOwnProperty(key)) {
                if (this.props.toolbarEvent[key] == null) {
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
                    <button className={this.getStepClassName(this.eventProps.jiraTicket)} onClick={() => this.props.editJiraTicketOnToolbarEvent(null)}>
                        <span>{this.props.toolbarEvent.jiraTicket ? this.props.toolbarEvent.jiraTicket.key : "Jira Ticket"}</span>
                    </button>
                    +
                    <button className={this.getStepClassName(this.eventProps.assignee)} onClick={() => this.props.editAssigneeOnToolbarEvent(null)}>
                        <span>{this.props.toolbarEvent.assignee ? this.props.toolbarEvent.assignee.displayName : "Assignee"}</span>
                    </button>
                    +
                    <button className={this.getStepClassName(this.eventProps.dueDate)} onClick={() => this.props.editDueDateOnToolbarEvent(null)}>
                        <span>{this.props.toolbarEvent.dueDate ? this.props.toolbarEvent.dueDate.format("LL") : "Due Date"}</span>
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
    toolbarEvent: state.event.toolbarEvent,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    editJiraTicketOnToolbarEvent: EventActions.editJiraTicketOnToolbarEvent,
    editAssigneeOnToolbarEvent: EventActions.editAssigneeOnToolbarEvent,
    editDueDateOnToolbarEvent: EventActions.editDueDateOnToolbarEvent,
    completeEditingToolbarEvent: EventActions.completeEditingToolbarEvent,
    cancelEditingToolbarEvent: EventActions.cancelEditingToolbarEvent,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EventToolbar)  