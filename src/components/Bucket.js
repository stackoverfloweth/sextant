import React from 'react'
import BucketItem from './BucketItem'
import { editJiraTicketOnEvent } from '../actions/action_event';

class Bucket extends React.Component {

    render() {
        const { bucketHeightVh, usersprint, user, maxStoryPoints } = this.props
        return (
            <div className='dev-bucket col-md-3 col-lg-2'>
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

export default Bucket