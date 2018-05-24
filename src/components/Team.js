import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="team sticky-top">
                <div class="col header">
                    Team
                    </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}