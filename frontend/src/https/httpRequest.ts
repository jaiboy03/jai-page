import store from "@/store";
import axios from "axios";

const http = axios.create({
    headers : { "content-type" : "application/json"},
    withCredentials : true
})

http.interceptors.request.use(
    (config : any) => {
        const isAuthenticated = store.getters["isAuthenticated"];
        if (isAuthenticated) {
            config.headers.common["Authorization"] = store.getters["getAccessToken"];
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
)

http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

export default http;