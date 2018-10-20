import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Wizard from './components/Wizard/Wizard';

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={Dashboard} exact />
                    <Route path="/wizard" component={Wizard} />
                </Switch>
            </div>
        )
    }
}

export default Routes; 