import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateStepThree, clearState } from '../../ducks/reducer';

const BASE_URL = 'http://localhost:3005'

class StepThree extends Component {

    constructor(props) {

        super(props);

        this.state = {
            "Monthly Mortgage Amount": "",
            "Desired Monthly Rent": ""
        }

    }

    inputBoxChange = (event, type) => {

        const input_string = event.target.value;

        this.setState({ [type]: input_string })

    }

    addToServer = () => {

        let data = {
            name: this.props["Property Name"],
            address: this.props["Address"],
            city: this.props["City"],
            state: this.props["State"],
            zipcode: this.props["Zip Code"],
            img: this.props["Image URL"],
            mortgage: this.state["Monthly Mortgage Amount"],
            rent: this.state["Desired Monthly Rent"]
        }

        axios.post(`${BASE_URL}/api/houses`, data).then(response => {
            this.props.clearState()
            this.props.history.push('/')
        })

    }

    render() {

        return (
            <div>

                <div>
                    Monthly Mortgage Amount:
                    <input placeholder="Monthly Mortgage Amount" onChange={event => this.inputBoxChange(event, "Monthly Mortgage Amount")} />
                </div>

                <div>
                    Desired Monthly Rent:
                    <input placeholder="Desired Monthly Rent" onChange={event => this.inputBoxChange(event, "Desired Monthly Rent")} />
                </div>

                <button onClick={this.addToServer}>COMPLETE</button>

            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        "Property Name": state["Property Name"],
        "Address": state["Address"],
        "City": state["City"],
        "State": state["State"],
        "Zip Code": state["Zip Code"],
        "Image URL": state["Image URL"],
        "Monthly Mortgage Amount": state["Monthly Mortgage Amount"],
        "Desired Monthly Rent": state["Desired Monthly Rent"]
    }
}

export default connect(mapStateToProps, { updateStepThree, clearState })(StepThree);