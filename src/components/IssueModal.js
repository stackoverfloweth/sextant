import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import { getPriorityColor } from '../shared/issue'

import ReactLoading from 'react-loading'
import Modal from 'react-bootstrap4-modal'

export default class IssueModal extends React.Component {
    onKeyDown = (e) => {
        if (e.keyCode === 27) {
            this.onCancel(e)
        }
    }
    onCancel = (e) => {
        e.preventDefault();

        if (!this.props.event.isLoading) {
            this.props.onCancel();
        }
    }
    componentDidMount() {
        document.addEventListener("keydown", this.onKeyDown, false)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown, false)
    }

    handleDescriptionClick = (e, b) => {
        e.preventDefault()

        const src = _.get(e, "target.src")
        const href = _.get(e, "target.href")

        if (src || href) {
            window.open(src ? src.replace("thumbnail", "attachment") : href)
        }
    }

    getLoadingElement() {
        return <div className="d-flex justify-content-center p-5">
            <ReactLoading type="cubes" color="#ccc" height={20} width={50} />
        </div>
    }
    getIssueContent() {
        return (
            <div onClick={this.handleDescriptionClick}>
                <div className="issue-content" dangerouslySetInnerHTML={{ __html: this.props.event.description }}></div>
                {this.props.event.comments.length > 0 && <div className="comment-container">{this.getCommentsHtml()}</div>}
            </div>
        )
    }
    getCommentsHtml() {
        return this.props.event.comments.map(x => (
            <div className="comment" key={x.id}>
                <div className="author">{x.author.displayName}</div>
                <div dangerouslySetInnerHTML={{ __html: x.body }}></div>
                <div className="datestamp">{x.created}</div>
            </div>
        ))
    }
    render() {
        return ReactDOM.createPortal(
            <Modal visible={true} onClickBackdrop={this.onCancel} dialogClassName="modal-lg modal-dialog-centered issue-modal">
                <div className="modal-header">
                    <h5 className="modal-title">
                        {this.props.event.key}
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.onCancel}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body" style={{borderColor: getPriorityColor(this.props.event.priority.name)}}>
                    {this.props.event.isLoading
                        ? this.getLoadingElement()
                        : this.getIssueContent()
                    }
                </div>
            </Modal>,
            document.querySelector('#modal-wrapper')
        )
    }
}