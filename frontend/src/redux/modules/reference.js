// imports

// actions
const SET_REFERENCE = 'SET_REFERENCE';

// action creators
function setReference(reference){
    return {
        type: SET_REFERENCE,
        reference
    }
}

// API actions
function getReference(){
    return dispatch => {
        fetch('./json/reference.json', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(json => {
            dispatch(setReference(json));
        })
        .catch(err => console.log(err));
    }
}

// initial state
const initialState = {};

// reducer
function reducer(state = initialState, action){
    switch (action.type) {
        case SET_REFERENCE:
            return applyGetReference(state, action);
        default:
            return state;
    }
}
// reducer functions
function applyGetReference(state, action){
    const { reference } = action;
    return {
        ...state,
        reference
    }
}

// exports
const actionCreators = {
    getReference
};
export { actionCreators };

// export reducer by default
export default reducer;