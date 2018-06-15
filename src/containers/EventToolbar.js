import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as EventActions from '../actions/action_event'

class EventToolbar extends React.Component {
    constructor(props) {
        super(props);

        this.eventProps = {
            jiraTicket: "jiraTicket",
            member: "member",
            dueDate: "dueDate",
        }
    }

    getStepClassName = (target) => {
        return `event-form-item 
            ${this.props.eventCurrentlyBeingEdited.event[target] ? "completed" : ""} 
            ${this.props.eventCurrentlyBeingEdited.watchingForInput === target ? "watching-for-input" : ""}
        `;
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
    changeInputWatch = (target) => {
        if (this.props.eventCurrentlyBeingEdited.watchingForInput === target) {
            this.props.beginWatchingForInput(null)
        } else if (this.props.eventCurrentlyBeingEdited.event[target] != null) {
            this.props.editMemberOnEvent(null)
            this.props.beginWatchingForInput(target)
        } else {
            this.props.beginWatchingForInput(target)
        }
    }
    render() {
        return (
            <div className="row event-toolbar d-flex justify-content-between">
                <div className="event-form">
                    <button className={this.getStepClassName(this.eventProps.jiraTicket)} onClick={() => this.changeInputWatch(this.eventProps.jiraTicket)}>
                        <span>Jira Ticket</span>
                    </button>
                    +
                    <button className={this.getStepClassName(this.eventProps.member)} onClick={() => this.changeInputWatch(this.eventProps.member)}>
                        <span>{this.props.eventCurrentlyBeingEdited.event.member ? `${this.props.eventCurrentlyBeingEdited.event.member.firstName} ${this.props.eventCurrentlyBeingEdited.event.member.lastName}` : "Team Member"}</span>
                    </button>
                    +
                    <button className={this.getStepClassName(this.eventProps.dueDate)} onClick={() => this.changeInputWatch(this.eventProps.dueDate)}>
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
    beginWatchingForInput: EventActions.beginWatchingForInput,
    completeEditingEvent: EventActions.completeEditingEvent,
    cancelEditingEvent: EventActions.cancelEditingEvent,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EventToolbar)  