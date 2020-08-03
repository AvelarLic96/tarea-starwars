export const types = {
    FETCH_STARSHIP_LIST_FAILURE: 'STARSHIP/FETCH_LIST_FAILURE',
    FETCH_STARSHIP_LIST_REQUEST: 'STARSHIP/FETCH_LIST_REQUEST',
    FETCH_STARSHIP_LIST_SUCCESS: 'STARSHIP/FETCH_LIST_SUCCESS',
}

export function fetchRequest() {
    return {
        type: types.FETCH_STARSHIP_LIST_REQUEST,
    }
}

export function fetchError() {
    return {
        type: types.FETCH_STARSHIP_LIST_FAILURE,
    }
}

export function fetchSuccess(list) {
    return {
        type: types.FETCH_STARSHIP_LIST_SUCCESS,
        payload: {list}
    }
}