import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="team sticky-top">
                <div className="col header">
                    Team
                    </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}