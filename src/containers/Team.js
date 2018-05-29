import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addNewTeamMember } from '../actions/action_team'
import Member from '../components/Member'

class Team extends React.Component {
    openMemberModal = (e) => {
        e.preventDefault();

        ReactDOM.render(<Member />, document.querySelector('#modal-wrapper'))
        //this.props.addNewTeamMember();
    }
    getTeamMembersList = () => {
        return (
            <ul className="list-group">
                <li className="member add-member" onClick={this.openMemberModal}>
                    <div className="color"></div>
                    <div className="title">Add Team Member</div>
                </li>
                {this.props.team.map(member => this.getMemberHtml(member))}
            </ul>
        )
    }
    getMemberHtml(member) {
        return <li className="member" key={member.memberId}>
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
            </div>
        );
    }
}

const mapStateToProps = state => ({ team: state.team })

const mapDispatchToProps = dispatch => bindActionCreators({ addNewTeamMember }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Team)