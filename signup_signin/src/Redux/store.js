import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import { signupReducer } from "./Register/reducer";
import { loginReducer } from "./Login/reducer";
import { ImagesReducer } from "./Images/reducer";

const rootReducer = combineReducers({
    sign: signupReducer,
    login: loginReducer,
    images: ImagesReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer,
    composeEnhancer(applyMiddleware(thunk))
)

