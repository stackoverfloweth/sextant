import React from 'react'
import Modal from 'react-bootstrap4-modal'

export default class MemberModal extends React.Component {
    onKeyDown = (e) => {
        if (e.keyCode === 27) {
            this.props.onCancel(e);
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyDown, false);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown, false);
    }
    render() {
        return (
            <Modal visible={true} onClickBackdrop={this.props.onCancel}>
                <div className="modal-header">
                    <h5 className="modal-title">Red Alert!</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onCancel}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {this.props.member.firstName} {this.props.member.lastName}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={this.props.onCancel}>
                        Panic
                    </button>
                    <button type="button" className="btn btn-primary">
                        Fire phasers
                    </button>
                </div>
            </Modal>
        )
    }
}