import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-bootstrap4-modal'

export default class MemberModal extends React.Component {
    onKeyDown = (e) => {
        if (e.keyCode === 27) {
            this.onCancel(e)
        }else if(e.keyCode === 13){
            this.onSubmit(e)
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyDown, false);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown, false);
    }
    onChange = (e) => {
        this.props.setEditingTeamMemberValues(e.target.name, e.target.value)
    }
    onSubmit = (e) => {
        this.props.completeEditingTeamMember(this.props.member)
    }
    onCancel = (e) => {
        this.props.cancelEditingTeamMember()
    }
    render() {
        return ReactDOM.createPortal(
            <Modal visible={true} onClickBackdrop={this.onCancel}>
                <div className="modal-header">
                    <h5 className="modal-title">{this.props.member.memberId ? "Edit Team Member" : "New Team Member"}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.onCancel}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" name="firstName" 
                                value={this.props.member.firstName} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" name="lastName" 
                                value={this.props.member.lastName} onChange={this.onChange} />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={this.onCancel}>
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>
                        Submit
                    </button>
                </div>
            </Modal>,
            document.querySelector('#modal-wrapper')
        )
    }
}