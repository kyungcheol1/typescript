const initialState = {
    islogin: false,
    user: {},
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case "USER/LOGIN":
            return { ...state, islogin: true, user: action.payload };
        case "USER/LOGOUT":
            return { ...state, islogin: false, user: {} };

        default:
            return state;
    }
};

