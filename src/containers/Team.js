import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as MemberActions from '../actions/action_member'
import Member from '../components/Member'

class Team extends React.Component {
    constructor(props){
        super(props);

        this.emptyMember = {
            memberId: null,
            firstName: "",
            lastName: "",
            color: ""
        }
    }
    getTeamMembersList = () => {
        return (
            <ul className="list-group">
                <li className="member add-member" onClick={() => { this.props.beginEditingTeamMember(this.emptyMember) }}>
                    <div className="color"></div>
                    <div className="title">Add Team Member</div>
                </li>
                {this.props.team.map(member => this.getMemberHtml(member))}
            </ul>
        )
    }
    getMemberHtml(member) {
        return <li className="member" key={member.memberId} onClick={() => { this.props.beginEditingTeamMember(member) }}>
            <span className="color" style={{ backgroundColor: member.color }}></span>
            <span className="title">{member.firstName} {member.lastName}</span>
        </li>
    }
    render() {
        return (
            <div className="team sticky-top row">
                <div className="col">
                    <div className="header">
                        <h3>Team Members</h3>
                    </div>
                    {this.getTeamMembersList()}
                </div>
                {this.props.memberCurrentlyBeingEdited
                    ? <Member cancelEditingTeamMember={this.props.cancelEditingTeamMember}
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
    memberCurrentlyBeingEdited: state.memberCurrentlyBeingEdited
})

const mapDispatchToProps = dispatch => bindActionCreators({ 
    beginEditingTeamMember: MemberActions.beginEditingTeamMember,
    cancelEditingTeamMember: MemberActions.cancelEditingTeamMember,
    completeEditingTeamMember: MemberActions.completeEditingTeamMember,
    setEditingTeamMemberValues: MemberActions.setEditingTeamMemberValues,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Team)