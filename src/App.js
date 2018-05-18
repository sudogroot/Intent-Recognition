import React, {Component, Fragment} from 'react';
import './App.css';
import Dashboard from './containers/Dashboard';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Dashboard/>
            </Fragment>
        );
    }
}

export default App;
