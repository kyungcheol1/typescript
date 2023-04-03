const initialState = {
    isLoading: true,
    category: {},
    error: null,
};

export const category = (state = initialState, action) => {
    switch (action.type) {
        case "CATEGORY/GET":
            return { ...state, category: action.payload };
        default:
            return state;
    }
};

