import React from 'react'

export default class EventToolbar extends React.Component {
    render() {
        return (
            <div className="row jira-toolbar d-flex justify-content-between">
                <div className="selected-form">
                    <div className="selected-form-item">
                        <span>Jira Ticket</span>
                    </div>
                    +
                    <div className="selected-form-item">
                        <span>Team Member</span>
                    </div>
                    +
                    <div className="selected-form-item">
                        <span>Due Date</span>
                    </div>
                    +
                    <div className="selected-form-item action" onClick={this.props.onSubmit}>
                        <span>Add to Calendar</span>
                    </div>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onClose}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
}