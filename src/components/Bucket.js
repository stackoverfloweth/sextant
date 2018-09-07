import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from 'react-redux'

import BucketItem from './BucketItem'

import * as EventActions from '../actions/action_event'
import * as JiraActions from '../actions/action_jira';

class Bucket extends React.Component {

    constructor(props) {
        super(props)
        this.state = { dragHover: false }
    }

    handleDragOver = (event) => {
        event.preventDefault()
        this.setState({ dragHover: true })
    }

    handleDragLeave = (event) => {
        event.preventDefault()
        this.setState({ dragHover: false })
    }

    handleDrop(event, user) {
        event.preventDefault()

        var data = event.dataTransfer.getData("text")

        this.setState({ dragHover: false })
        this.props.assignTicketAction({
            issueKey: data,
            issueData: {
                duedate: '12/22/1991'
            }
        })
    }

    renderBucketItem = () => {
        if (this.props.usersprint && this.props.usersprint.issues) {
            return this.props.usersprint.issues.map(ticket =>
                <BucketItem
                    {...this.props}
                    onClick={() => this.props.viewEvent(ticket)}
                    key={ticket.key}
                    ticket={ticket}
                />
            )
        }
    }

    render() {
        return (
            <div className='bucket col-md-3 col-lg-2'
                onDragOver={this.handleDragOver}
                onDragLeave={this.handleDragLeave}
                onDrop={(ev) => this.handleDrop(ev, this.props.user)}
            >
                <div style={{ height: `${this.props.bucketHeightVh}vh` }} className={`bucket-body ${this.state.dragHover && 'drop-hover'}`}>
                    <div className='bucket-content'>
                        {this.renderBucketItem()}
                    </div>
                </div>
                <div className='bucket-title'>{this.props.user.displayName}</div>
            </div>


        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    viewEvent: EventActions.viewEvent,
    assignTicketAction: JiraActions.assignTicketAction
}, dispatch)

export default connect(null, mapDispatchToProps)(Bucket)