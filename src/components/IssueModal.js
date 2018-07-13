import React from 'react'
import ReactDOM from 'react-dom'

import Modal from 'react-bootstrap4-modal'

export default class IssueModal extends React.Component {
    onKeyDown = (e) => {
        if (e.keyCode === 27) {
            this.props.onCancel(e)
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyDown, false)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown, false)
    }
    render() {
        console.log(this.props.event)
        return ReactDOM.createPortal(
            <Modal visible={true} onClickBackdrop={this.props.onCancel} dialogClassName="modal-lg modal-dialog-centered">
                <div className="modal-header">
                    <h5 className="modal-title">
                        {this.props.event.key}
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onCancel}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {this.props.event.description}
                </div>
            </Modal>,
            document.querySelector('#modal-wrapper')
        )
    }
}