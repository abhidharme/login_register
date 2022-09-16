import * as types from "./actionTypes";

const initialState = {
    loading: false,
    Images: [],
    error: false
}

export const ImagesReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case types.FETCH_IMAGES_REQUEST:
            return {
                ...store,
                loading: true,
                error: false
            };
        case types.FETCH_IMAGES_SUCCESS:
            return {
                ...store,
                loading: false,
                Images: payload,
                error: false
            };
        case types.FETCH_IMAGES_FAILURE:
            return {
                ...store,
                loading: false,
                error: true
            };
        default:
            return store;
    }
}