const initState = {
    thoughts: [
        { id: "1", title: "a thought", content: "im thinking" },
        { id: "2", title: "two thought", content: "im thinking aboit" },
        { id: "3", title: "three thought", content: "im thinking aboit stuff" },
    ],
};

const thoughtReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_THOUGHT":
            console.log("created thought", action.thought);
            return state;
        case "CREATE_THOUGHT_ERROR":
            console.log("created thought error", action.err);
            return state;

        default:
            return state;
    }
};

export default thoughtReducer;

// for delete thought, read comments of video 30
