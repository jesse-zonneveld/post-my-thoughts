export const login = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        // make asynce call to db
        const firebase = getFirebase();
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: "LOGIN_SUCCESS" });
            })
            .catch((err) => {
                dispatch({ type: "LOGIN_ERROR", err });
            });
    };
};

export const logout = () => {
    return (dispatch, getState, { getFirebase }) => {
        // make asynce call to db
        const firebase = getFirebase();
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({ type: "LOGOUT_SUCCESS" });
            });
    };
};

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make asynce call to db
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase
            .auth()
            .createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then((resp) => {
                return firestore
                    .collection("users")
                    .doc(resp.user.uid)
                    .set({
                        firstName: newUser.firstName,
                        lastName: newUser.lastName,
                        initials: newUser.firstName[0] + newUser.lastName[0],
                    });
            })
            .then(() => {
                dispatch({ type: "SIGNUP_SUCCESS" });
            })
            .catch((err) => {
                dispatch({ type: "SIGNUP_ERROR", err });
            });
    };
};
