import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import thoughtReducer from "./thoughtReducer";
import paginationReducer from "./paginationReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    thought: thoughtReducer,
    pagination: paginationReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export default rootReducer;
