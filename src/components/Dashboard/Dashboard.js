import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import House from '../House/House';

const BASE_URL = 'http://localhost:3005'

class Dashboard extends Component {

    constructor(props) {

        super(props);

        this.state = {
            houses: []
        }

    }

    componentDidMount() {

        this.getAllHouses();

    }

    getAllHouses = () => {

        axios.get(`${BASE_URL}/api/houses`).then(response => {
            this.setState({ houses: response.data })
        })

    }

    deleteHouse = id => {

        axios.delete(`${BASE_URL}/api/houses/${id}`).then(response => {
            this.getAllHouses()
        })

    }

    render() {

        let dash = this.state.houses.map(house => {

            return (
                <div key={house.id}>
                    <House houseDetails={house} deleteFunction={this.deleteHouse} />
                </div>
            )

        })

        return (
            <div>

                Dashboard

                {dash}

                <Link to="/wizard">
                    <button>Add New Property</button>
                </Link>

            </div>
        )
    }
}

export default Dashboard;