import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export class HttpRequest {
    private instance: AxiosInstance;

    constructor(api?: AxiosRequestConfig) {
        this.instance = axios.create(Object.assign({
            baseURL: 'https://localhost:3000',
            headers: {},
            withCredentials: true
        }, api || {}))
    }

    public request(api: AxiosRequestConfig) {
        return this.instance.request(api);
    }
}