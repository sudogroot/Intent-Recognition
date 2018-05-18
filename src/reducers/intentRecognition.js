import {INTENT_RECOGNITION} from '../constants/actionTypes';

let initialState = {
    dataset: [],
    languages: [],
    commands: [],
    selctedData: null,
    selctedLang: null
}

export default (state = initialState, action) => {
    switch (action.type) {

        case INTENT_RECOGNITION.FETCH_DATASET:

            let selctedData = state.selctedData;
            const dataset = action.payload;
            if (dataset.length && selctedData === null) {
                selctedData = dataset[0].id
            }
            return {
                ...state,
                dataset,
                selctedData
            };

        case INTENT_RECOGNITION.FETCH_LANGUAGES:

            let selctedLang = null;
            const languages = action.payload;
            if (languages.length) {
                selctedLang = languages[0].id
            }
            return {
                ...state,
                languages,
                selctedLang
            };

        case INTENT_RECOGNITION.FETCH_COMMANDS:

            return {
                ...state,
                commands: action.payload
            };

        case INTENT_RECOGNITION.SELECT_DATASET:

            return {
                ...state,
                selctedData: action.payload
            };

        case INTENT_RECOGNITION.SELECT_LANG:

            return {
                ...state,
                selctedLang: action.payload
            };

        default:
            return state;
    }
}