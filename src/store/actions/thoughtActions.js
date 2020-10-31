export const createThought = (thought) => {
    // if not using thunk---------
    // return {
    //     type: "CREATE_THOUGHT",
    //     thought: thought,
    // };
    // ---------------------------
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make asynce call to db
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorID = getState().firebase.auth.uid;
        firestore
            .collection("thoughts")
            .add({
                ...thought,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorID: authorID,
                createdAt: new Date(),
            })
            .then(() => {
                dispatch({ type: "CREATE_THOUGHT", thought: thought });
            })
            .catch((err) => {
                dispatch({ type: "CREATE_THOUGHT_ERROR", err: err });
            });
    };
};
