import React, {Component} from 'react'
import {Segment, Card} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {requestCommands} from '../actions/intentRecognition';

class Commands extends Component {


    render() {
        const {commands} = this.props;
        if (this.props.selctedLang) {
            this.props.requestCommands(this.props.selctedLang);
        }

        return (
            <div>
                <Segment>
                    <Card.Group items={commands.map(elm => {
                        return {header: elm.cmd, key: elm.id}
                    })}/>
                </Segment>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const {selctedLang, commands} = state.inientRecognition;
    return {selctedLang, commands}
};

const mapDispatchToProps = {
    requestCommands
};

export default connect(mapStateToProps, mapDispatchToProps)(Commands);