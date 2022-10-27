import { applyMiddleware, combineReducers, createStore } from "redux";

import { PhotosReducer } from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    photoReducer: PhotosReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));