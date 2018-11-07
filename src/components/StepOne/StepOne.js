import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateStepOne } from '../../ducks/reducer';

class StepOne extends Component {

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

        const {
            updateStepOne
        } = this.props;

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

                <Link to="/wizard/steptwo">
                    <button onClick={() => updateStepOne(this.state["Property Name"], this.state["Address"], this.state["City"], this.state["State"], this.state["Zip Code"])}>NEXT</button>
                </Link>

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
        "Zip Code": state["Zip Code"]
    }
}

export default connect(mapStateToProps, { updateStepOne })(StepOne);