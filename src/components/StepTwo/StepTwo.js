import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateStepTwo } from '../../ducks/reducer';

class StepTwo extends Component {

    constructor(props) {

        super(props);

        this.state = {
            "Image URL": ""
        }

    }

    inputBoxChange = (event, type) => {

        const input_string = event.target.value;

        this.setState({ [type]: input_string })

    }

    render() {

        const {
            updateStepTwo
        } = this.props;

        return (
            <div>

                <div>
                    Image URL:
                    <input placeholder="Image URL" onChange={event => this.inputBoxChange(event, "Image URL")} />
                </div>

                <Link to="/wizard/stepthree">
                    <button onClick={() => updateStepTwo(this.state["Image URL"])}>NEXT</button>
                </Link>

            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        "Image URL": state["Image URL"]
    }
}

export default connect(mapStateToProps, { updateStepTwo })(StepTwo);