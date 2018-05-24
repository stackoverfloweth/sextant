import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">
                        <span className="logo"></span>
                        <h1 className="p-2">Sextant</h1>
                    </a>
                </div>
            </nav>
        )
    }
}