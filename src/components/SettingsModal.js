import React from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-bootstrap4-modal'

export default class SettingsModal extends React.Component {
    onKeyDown = (e) => {
        if (e.keyCode === 27) {
            this.onCancel(e)
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyDown, false);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown, false);
    }
    onCancel = (e) => {
        this.props.close()
    }
    render() {
        return ReactDOM.createPortal(
            <Modal visible={true} onClickBackdrop={this.onCancel} dialogClassName="modal-lg modal-dialog-centered">
                <div className="modal-header">
                    <h5 className="modal-title">
                        Settings
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.onCancel}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" name="firstName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" name="firstName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" name="firstName" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" name="firstName" />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={this.onCancel}>
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>
                        Save Changes
                    </button>
                </div>
            </Modal>,
            document.querySelector('#modal-wrapper')
        )
    }
}