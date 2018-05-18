import React, {Component} from 'react';
import {Dropdown, Segment} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {requestInit, changeSelectedData, changeSelectedLang,} from '../actions/intentRecognition';

class Select extends Component {
    componentDidMount() {
        this.props.requestInit();
    }

    render() {
        const {dataset, languages, selctedData, selctedLang} = this.props;
        return (
            <div>
                <Segment>
                    <h1>Dataset</h1>
                    <Dropdown value={selctedData} placeholder='Dataset' options={
                        dataset.map(elm => {
                            return {text: elm.name, value: elm.id}
                        })
                    } onChange={(e, selected) => this.props.changeSelectedData(selected.value)} fluid search selection/>
                </Segment>
                <Segment>
                    <h1>Languages</h1>
                    <Dropdown value={selctedLang} placeholder='Languages' options={
                        languages.map(elm => {
                            return {text: elm.language, value: elm.id}
                        })
                    } onChange={(e, selected) => this.props.changeSelectedLang(selected.value)} fluid search selection/>
                </Segment>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const {dataset, selctedData, selctedLang, languages} = state.inientRecognition;
    return {dataset, languages, selctedData, selctedLang}
};

const mapDispatchToProps = {
    requestInit,
    changeSelectedData,
    changeSelectedLang,
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);