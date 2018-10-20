import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import House from '../House/House';

class Dashboard extends Component {
    render() {
        return (
            <div>

                Dashboard

                <House />

                <Link to="/wizard">
                    <div><button>Add New Property</button></div>
                </Link>

            </div>
        )
    }
}

export default Dashboard;