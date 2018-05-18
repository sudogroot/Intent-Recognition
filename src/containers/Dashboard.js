import React, {Component} from 'react';
import Select from '../components/Select';
import Commands from '../components/Commands';
import {Tab} from 'semantic-ui-react';

const panes = [
    {menuItem: 'INTENT RECOGNTION', render: () => <Tab.Pane><Select/><Commands/> </Tab.Pane>},
    {menuItem: 'WAKEWORD', render: () => <Tab.Pane>thi si the WAKEWORD</Tab.Pane>}
];

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Tab panes={panes}/>
            </div>
        );
    }
}

export default Dashboard;
