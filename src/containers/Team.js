import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as MemberActions from '../actions/action_member'
import * as EventActions from '../actions/action_event'
import MemberModal from '../components/MemberModal'

class Team extends React.Component {
    handleTeamMemberClick = (member) => {
        if (this.props.eventCurrentlyBeingEdited) {
            this.props.editAssigneeOnEvent(member)
        } else {
            this.props.beginEditingTeamMember(member)
        }
    }
    getTeamMembersList = () => {
        return (
            <ul className="list-group">
                <li className="member add-member" onClick={() => { this.handleTeamMemberClick() }}>
                    <div className="color"></div>
                    <div className="title">Add Team Member</div>
                </li>
                {this.props.team.map(member => this.getMemberHtml(member))}
            </ul>
        )
    }
    getMemberHtml(member) {
        return <li className="member" key={member.memberId} onClick={() => { this.handleTeamMemberClick(member) }}>
            <span className="color" style={{ backgroundColor: member.color }}></span>
            <span className="title">{member.firstName} {member.lastName}</span>
        </li>
    }
    render() {
        return (
            <div className="team sticky-top row">
                <div className="col">
                    {this.getTeamMembersList()}
                </div>
                {this.props.memberCurrentlyBeingEdited
                    ? <MemberModal cancelEditingTeamMember={this.props.cancelEditingTeamMember}
                        setEditingTeamMemberValues={this.props.setEditingTeamMemberValues}
                        completeEditingTeamMember={this.props.completeEditingTeamMember}
                        member={this.props.memberCurrentlyBeingEdited} />
                    : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    team: state.team,
    eventCurrentlyBeingEdited: state.eventCurrentlyBeingEdited,
    memberCurrentlyBeingEdited: state.memberCurrentlyBeingEdited,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    beginEditingTeamMember: MemberActions.beginEditingTeamMember,
    cancelEditingTeamMember: MemberActions.cancelEditingTeamMember,
    completeEditingTeamMember: MemberActions.completeEditingTeamMember,
    setEditingTeamMemberValues: MemberActions.setEditingTeamMemberValues,
    editAssigneeOnEvent: EventActions.editAssigneeOnEvent,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Team)