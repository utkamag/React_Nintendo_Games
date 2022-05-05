

import {apiAction, apiState} from "../../types/apiTypes";

// Создаем константы

const FETCH_USERS = "FETCH_USERS"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"



// Дефолтное состояние
const defaultState = {
    users: [],
    loading: false,
    error: null
}


// Редьюсер

export const reducer = (state = defaultState, action: apiAction): any => {
    switch (action.type) {
        case FETCH_USERS:
            return {loading: true, error: null, users: []}
        case FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        case FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        default:
            return state
    }
}

//