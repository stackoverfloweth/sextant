import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addNewEvent } from '../actions/action_calendar'

class Team extends React.Component {
    onButtonClick = (e) => {
        e.preventDefault();

        this.props.addNewEvent();
    }

    render() {
        return (
            <div className="team sticky-top">
                <div className="col header">
                    Team
                    </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="" className="btn btn-primary" onClick={this.onButtonClick}>Go somewhere</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ team: state.team })

const mapDispatchToProps = dispatch => bindActionCreators({ addNewEvent }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Team)