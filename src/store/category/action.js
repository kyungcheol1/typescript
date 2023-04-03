// import request from "../../utils/request";

// export const categoryRequest = (props) => {
//     return async (dispatch) => {
//         const respons = await request.get("/category");
//         dispatch({ type: "CATEGORY/GET", payload: respons.data });
//     };
// };

import { Dispatch } from "redux";
import request from "../../utils/request";
import { Action } from "../types";
console.log(Dispatch)

// export const categoryRequest = (props: any) => {
//     return async (dispatch: Dispatch<Action>) => {
//         const respons = await request.get("/category");
//         dispatch({ type: "CATEGORY/GET", payload: respons.data });
//     };
// };

