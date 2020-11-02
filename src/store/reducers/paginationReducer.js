const initState = {
    currentPage: 1,
    thoughtsPerPage: 12,
};

const paginationReducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_PAGE":
            console.log("changed page", action.pageNumber);
            return {
                ...state,
                currentPage: action.pageNumber,
            };
        case "CHANGE_PAGE_ERROR":
            console.log("changed page error", action.err);
            return state;

        default:
            return state;
    }
};

export default paginationReducer;
