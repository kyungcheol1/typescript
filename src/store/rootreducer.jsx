import { combineReducers } from "redux";
import { user } from "./user";
import { category } from "./category";

export const rootReducer = combineReducers({
    user,
    category,
});

