import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light navbar-expand-lg justify-content-between">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">
                        <span className="logo"></span>
                        <h1 className="p-1">Sextant</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="" onClick={this.props.addEvent}>Add Jira Ticket</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Settings</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}