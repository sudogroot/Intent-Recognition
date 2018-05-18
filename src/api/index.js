import mock from './mock.json'
import _ from 'lodash'

function fakeRequest(data) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, (Math.random() * 100));
    })
}

const fetchDateset = () => {
    const dataset = mock.map(elm => {
        return {id: elm.id, name: elm.name}
    });
    return fakeRequest(dataset);
};

const fetchLanguages = id => {
    const languages = mock.find(elem => elem.id === parseInt(id, 10)).data.map(elm => {
        return {id: elm.id, language: elm.language}
    });
    return fakeRequest(languages);

};


const fetchCommands = (languageId) => {
    const commands = _(mock)
        .map('data')
        .flatten()
        .find({id: parseInt(languageId, 10)}).commands;

    return fakeRequest(commands);
};


export default {fetchCommands, fetchLanguages, fetchDateset};
