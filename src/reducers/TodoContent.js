import { TEXT_CHANGED, TODO_ADD } from "../actions/types";


const INITIAL_STATE = {
    textInput: "",
    list: [

    ]
}

export default (state = INITIAL_STATE, action) => {


    switch (action.type) {

        case TEXT_CHANGED:
            return { ...state, textInput: action.payload }
        case TODO_ADD:
            return {
                ...state,
                list: [...state.list, action.payload],
                textInput: ""
            }
        default:
            return state;
    }
}