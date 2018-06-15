import React from 'react'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Field, reduxForm } from 'redux-form'

import * as SettingActions from '../actions/action_setting'

class SettingsForm extends React.Component {
    render() {
        return <form>
            <div className="form-group">
                <label htmlFor="firstName">Jira URL</label>
                <Field className="form-control" name="jiraUrl" component="input" type="text" />
            </div>
            <div className="form-group">
                <label htmlFor="firstName">Basic Auth Token</label>
                <Field className="form-control" name="basicToken" component="input" type="text" />
            </div>
        </form>
    }
}

const SettingsModalForm = reduxForm({
    form: 'SettingsForm'
})(SettingsForm)

const mapStateToProps = state => ({
    initialValues: state.settings
})

const mapDispatchToProps = dispatch => bindActionCreators({
    saveSettings: SettingActions.saveSettings,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModalForm)
