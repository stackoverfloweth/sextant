import React from 'react'
import BucketItem from './BucketItem'
import { connect } from 'react-redux'
import { assignTicketAction } from '../actions/action_jira';

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
            ticketId: data,
            user: user
        })
    }

    render() {
        const { bucketHeightVh, usersprint, user, maxStoryPoints } = this.props
        return (
            <div className='dev-bucket col-md-3 col-lg-2'
                onDragOver={this.handleDragOver}
                onDragLeave={this.handleDragLeave}
                onDrop={(ev) => this.handleDrop(ev, user)}
            >
                <div style={{ height: `${bucketHeightVh}vh` }} className={this.state.dragHover ? 'dev-bucket-body drop-hover' : 'dev-bucket-body'}>
                    <div className='bucket-content'>
                        {/* <div className='wave'/> */}
                        {usersprint &&
                            usersprint.issues &&
                            usersprint.issues.map(ticket =>
                                <BucketItem
                                    key={ticket.key}
                                    ticket={ticket}
                                    bucketHeightVh={bucketHeightVh}
                                    maxStoryPoints={maxStoryPoints} />
                            )}
                    </div>
                </div>
                <div className='bucket-title'>{user.displayName}</div>
            </div>


        )
    }
}

export default connect(null, { assignTicketAction })(Bucket)