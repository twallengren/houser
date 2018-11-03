import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BASE_URL = 'http://localhost:3005'

class Wizard extends Component {

    constructor(props) {

        super(props);

        this.state = {
            "Property Name": "",
            "Address": "",
            "City": "",
            "State": "",
            "Zip Code": ""
        }

    }

    inputBoxChange = (event, type) => {

        const input_string = event.target.value;

        this.setState({ [type]: input_string })

    }

    addToServer = () => {

        let data = {
            name: this.state["Property Name"],
            address: this.state["Address"],
            city: this.state["City"],
            state: this.state["State"],
            zipcode: this.state["Zip Code"]
        }

        axios.post(`${BASE_URL}/api/houses`, data).then(response => {
            this.props.history.push('/')
        })

    }

    render() {
        return (
            <div>

                <div>
                    Property Name:
                    <input placeholder="Property Name" onChange={event => this.inputBoxChange(event, "Property Name")} />
                </div>

                <div>
                    Address:
                    <input placeholder="Address" onChange={event => this.inputBoxChange(event, "Address")} />
                </div>

                <div>
                    City:
                    <input placeholder="City" onChange={event => this.inputBoxChange(event, "City")} />
                </div>

                <div>
                    State:
                    <input placeholder="State" onChange={event => this.inputBoxChange(event, "State")} />
                </div>

                <div>
                    Zip Code:
                    <input placeholder="Zip Code" onChange={event => this.inputBoxChange(event, "Zip Code")} />
                </div>

                <button onClick={this.addToServer}>COMPLETE</button>

                <Link to="/">
                    <button>Cancel</button>
                </Link>

            </div>
        )
    }
}

export default Wizard;