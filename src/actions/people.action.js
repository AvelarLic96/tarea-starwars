export const types = {
    FETCH_PEOPLE_LIST_FAILURE: 'PEOPLE/FETCH_LIST_FAILURE',
    FETCH_PEOPLE_LIST_REQUEST: 'PEOPLE/FETCH_LIST_REQUEST',
    FETCH_PEOPLE_LIST_SUCCESS: 'PEOPLE/FETCH_LIST_SUCCESS',
    FETCH_PEOPLE_FAILURE: 'PEOPLE/FETCH_FAILURE',
    FETCH_PEOPLE_REQUEST: 'PEOPLE/FETCH_REQUEST',
    FETCH_PEOPLE_SUCCESS: 'PEOPLE/FETCH_SUCCESS',
};

export function fetchRequest() {
    return {
        type: types.FETCH_PEOPLE_LIST_REQUEST,
    }
}

export function fetchError() {
    return {
        type: types.FETCH_PEOPLE_LIST_FAILURE,
    }
}

export function fetchSuccess(list) {
    return {
        type: types.FETCH_PEOPLE_LIST_SUCCESS,
        payload: {list}
    }
}

export function fetchDetailRequest() {
    return {
      type: types.FETCH_PEOPLE_REQUEST,
    }
}

export function fetchDetailSuccess(selected) {
    return {
      type: types.FETCH_PEOPLE_SUCCESS,
      payload: {selected}
    }
}

export function fetchDetailError() {
    return {
      type: types.FETCH_PEOPLE_FAILURE,
    }
  }