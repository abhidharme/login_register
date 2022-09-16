import axios from "axios"
import * as types from "./actionTypes";

const fetchImageRequest = () => ({
    type: types.FETCH_IMAGES_REQUEST
})

const fetchImageSuccess = (payload) => ({
    type: types.FETCH_IMAGES_SUCCESS,
    payload
})

const fetchImageFailure = () => ({
    type: types.FETCH_IMAGES_FAILURE
})

export const fetchImages = () => (dispatch) => {
    dispatch(fetchImageRequest());
    axios.get('https://ecom-data-project.herokuapp.com/prods')
        .then((res) => dispatch(fetchImageSuccess(res.data)))
        .catch((err) => dispatch(fetchImageFailure(console.log(err.message))))
}

