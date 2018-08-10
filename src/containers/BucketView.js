import React from 'react'
import Bucket from '../components/Bucket'
import { connect } from 'react-redux'
import _ from 'lodash'

class BucketView extends React.Component {
    render() {
        const bucketHeightVh = 80
        const maxStoryPoints = this.props.sprint.reduce((maxStoryPoints, userSprint) =>
            Math.max(maxStoryPoints, _.sumBy(userSprint.issues, 'storyPoints'))
            , 0)
        return (            
            <div className='bucket-container'>
                {/* <div className=""> */}
                    {this.props.users &&
                        this.props.users.map(user => {
                            return <Bucket
                                maxStoryPoints={maxStoryPoints}
                                bucketHeightVh={bucketHeightVh}
                                key={user.emailAddress}
                                user={user}
                                usersprint={_.find(this.props.sprint, { 'assignee': user.emailAddress })} />
                        })
                    }
                {/* </div> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.jira.users,
    sprint: state.jira.sprint
})

export default connect(mapStateToProps)(BucketView)