import React from 'react'
import BucketItem from './BucketItem'
import { connect } from 'react-redux'
import { assignTicketAction } from '../actions/action_jira';

class Bucket extends React.Component {

    preventDefault = (event) => {
        event.preventDefault()
    }

    handleDrop(event, user) {
        event.preventDefault()
        var data = event.dataTransfer.getData("text")
        //alert("data received: " + data + "  for user: " + user.displayName)
        this.props.assignTicketAction({
            ticketId: data,
            user: user
        })
    }

    render() {
        const { bucketHeightVh, usersprint, user, maxStoryPoints } = this.props
        return (
            <div className='dev-bucket col-md-3 col-lg-2'
                onDragOver={this.preventDefault} onDrop={(ev) => this.handleDrop(ev, user)}
            >
                <div style={{ height: `${bucketHeightVh}vh` }} className='dev-bucket-body'>
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