import React from 'react'
import ReactDOM from 'react-dom'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import SettingsForm from './SettingsForm'

import * as SettingActions from '../actions/action_setting'

import Modal from 'react-bootstrap4-modal'

class SettingsModal extends React.Component {
    onKeyDown = (e) => {
        if (e.keyCode === 27) {
            this.onCancel(e)
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyDown, false)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown, false)
    }
    onCancel = (e) => {
        this.props.hideSettingsModal()
    }
    onChange = (e) => {
        this.props.updateSettings();
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.saveSettings();
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
                    <SettingsForm />
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

const mapStateToProps = state => ({
    settings: state.settings,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    hideSettingsModal: SettingActions.hideSettingsModal,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModal)
