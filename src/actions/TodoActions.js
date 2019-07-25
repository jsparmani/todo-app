import { TEXT_CHANGED, TODO_ADD } from "./types";

let id = 0;

export const textInputChanged = text => {
    return {
        type: TEXT_CHANGED,
        payload: text
    }
}

export const addTodo = text => {
    return {
        type: TODO_ADD,
        payload: { id: id++, text }
    }
}
