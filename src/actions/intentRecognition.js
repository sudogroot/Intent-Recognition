import {INTENT_RECOGNITION} from '../constants/actionTypes';


//  ---- Request DataSet Action ---
const dataSetLoading = (dataSet) => ({
    type: INTENT_RECOGNITION.FETCH_DATASET,
    payload: dataSet
});

export const requestdataSet = () => (
    (dispatch, getState, api) => {
        return api.fetchDateset().then(dataSet => {
            dispatch(dataSetLoading(dataSet));
            return dataSet
        });
    }
);

// ----- DropDown Select Dataset action ----
const selectedDatatUpdating = (selectedData) => ({
    type: INTENT_RECOGNITION.SELECT_DATASET,
    payload: selectedData
});


export const changeSelectedData = (selectedData) => (
    (dispatch, getState, api) => {
        dispatch(selectedDatatUpdating(selectedData));
        dispatch(requestLanguage(selectedData))
    }
);


// ----- DropDown Select Languages action ----

const selectedLangUpdated = (selectedLang) => ({
    type: INTENT_RECOGNITION.SELECT_LANG,
    payload: selectedLang
});

export const changeSelectedLang = (selectedLang) => (
    (dispatch, getState, api) => {
        dispatch(selectedLangUpdated(selectedLang));
    }
);


// ----- Request Languages action ----

const languagesLoading = (lang) => ({
    type: INTENT_RECOGNITION.FETCH_LANGUAGES,
    payload: lang
});


export const requestLanguage = (id) => (
    (dispatch, getState, api) => {
        return api.fetchLanguages(id)
            .then(lang => {
                dispatch(languagesLoading(lang));
                return lang
            })

    }
);


// ----- INIT : request dataset + lnaguages + comannds action----

export const requestInit = () => (
    // request dataset and languages of the first one and commands
    (dispatch, getState) => {
        const commands = getState().inientRecognition.commands
        if (!commands.length) {
            dispatch(requestdataSet()).then(dataSet => dispatch(requestLanguage(dataSet[0].id))).then(
                lang => {
                    dispatch(requestCommands(lang[0].id))
                }
            );
        }
    }
);


// -----  request comannds action----

const commandLoding = (commands) => ({
    type: INTENT_RECOGNITION.FETCH_COMMANDS,
    payload: commands
});


export const requestCommands = (id) => (
    (dispatch, getState, api) => {
        api.fetchCommands(id)
            .then(cmds => {
                dispatch(commandLoding(cmds));
            })
    }
);

