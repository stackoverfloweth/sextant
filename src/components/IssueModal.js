import React from 'react'
import ReactDOM from 'react-dom'

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
    getLoadingElement() {
        return <div className="d-flex justify-content-center p-5">
            <ReactLoading type="cubes" color="#ccc" height={20} width={50} />
        </div>

    }
    getCommentsHtml() {
        return this.props.event.comments.map(x => (
            <div key={x.id}>
                ---------------------
                <div>{x.author.displayName}</div>
                <div>{x.body}</div>
                <div>{x.created}</div>
                ---------------------
            </div>
        ))
    }
    render() {
        console.log(this.props.event)
        return ReactDOM.createPortal(
            <Modal visible={true} onClickBackdrop={this.onCancel} dialogClassName="modal-lg modal-dialog-centered">
                <div className="modal-header">
                    <h5 className="modal-title">
                        {this.props.event.key}
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.onCancel}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {this.props.event.description}
                    {this.getCommentsHtml()}
                    {this.props.event.isLoading && this.getLoadingElement()}
                </div>
            </Modal>,
            document.querySelector('#modal-wrapper')
        )
    }
}