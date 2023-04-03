import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:3005",
    withCredentials: true,
});

export default request;

