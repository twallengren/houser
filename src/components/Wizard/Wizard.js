import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

    render() {
        return (
            <div>

                <input placeholder="Property Name" onChange={event => this.inputBoxChange(event, "Property Name")} />
                <input placeholder="Address" onChange={event => this.inputBoxChange(event, "Address")} />
                <input placeholder="City" onChange={event => this.inputBoxChange(event, "City")} />
                <input placeholder="State" onChange={event => this.inputBoxChange(event, "State")} />
                <input placeholder="Zip Code" onChange={event => this.inputBoxChange(event, "Zip Code")} />

                <Link to="/">
                    <div><button>Cancel</button></div>
                </Link>

            </div>
        )
    }
}

export default Wizard;