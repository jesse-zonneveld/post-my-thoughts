import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import thoughtReducer from "./thoughtReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    thought: thoughtReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});

export default rootReducer;
