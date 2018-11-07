import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearState } from '../../ducks/reducer';

import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';

class Wizard extends Component {

    render() {

        return (
            <div>

                <Route path="/wizard/stepone" component={StepOne} />
                <Route path="/wizard/steptwo" component={StepTwo} />
                <Route path="/wizard/stepthree" component={StepThree} />

                <Link to="/">
                    <button onClick={this.props.clearState}>Cancel</button>
                </Link>

            </div>
        )
    }
}

export default connect(null, { clearState })(Wizard);