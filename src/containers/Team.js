import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addNewTeamMember } from '../actions/action_team'
import Member from '../components/Member'

class Team extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        }
    }
    beginEditingMember = (member) => {
        this.setState({ memberCurrentlyBeingEdited: member })
    }
    cancelEditingMember = () => {
        this.setState({ memberCurrentlyBeingEdited: null })
    }
    submitEditingMember = () => {
        //this.props.addNewTeamMember();
    }
    onMemberChange = (property, value) => {
        this.setState(state => {
            state.memberCurrentlyBeingEdited[property] = value
            return state
        })
        //this.setState(state => (state.memberCurrentlyBeingEdited[e.target.name] = e.target.value))
    }
    getTeamMembersList = () => {
        return (
            <ul className="list-group">
                <li className="member add-member" onClick={() => { this.beginEditingMember({}) }}>
                    <div className="color"></div>
                    <div className="title">Add Team Member</div>
                </li>
                {this.props.team.map(member => this.getMemberHtml(member))}
            </ul>
        )
    }
    getMemberHtml(member) {
        return <li className="member" key={member.memberId} onClick={() => { this.beginEditingMember(member) }}>
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
                {this.state.memberCurrentlyBeingEdited
                    ? <Member onCancel={this.cancelEditingMember}
                        onMemberChange={this.onMemberChange}
                        onSubmit={this.submitEditingMember}
                        member={this.state.memberCurrentlyBeingEdited} />
                    : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({ team: state.team })

const mapDispatchToProps = dispatch => bindActionCreators({ addNewTeamMember }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Team)