import axios, { AxiosHeaders } from "axios";

export const httpClient = axios.create ({
    baseURL:'http://localhost:8080/api',
    withCredentials: true,
});

export default class ApiService {
    
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    getAll(url) {
        url = this.builderUrl(url);
        return httpClient.get(url);
    }

    // get(url) {
    //     url = this.builderUrl(url);
    //     return httpClient.get(url);
    // }
    // post(url, params) {
    //     url = this.builderUrl(url);
    //     return httpClient.post(url, params);
    // }

    // postWithHeaders(params) {
    //     return httpClient.post(this.endpoint, params, {
    //         headers:{
    //             'Content-type': 'multipart/form-data'
    //         },
    //     })
    // }
    
    // put(url, params) {
    //     url = this.builderUrl(url);
    //     return httpClient.put(url, params);
    // }
    
    

    // getAllById(url, id) {
    //     return httpClient.get(this.builderUrl(`${url}/${id}`));
    // }

    // getWithFilter(url) {
    //    url = this.builderUrl(url);
    //    return httpClient.get(url);
    // }
    
    // delete(url) {
    //     url = this.builderUrl(url);
    //     return httpClient.delete(url);
    // }

    // patch(url, params) {
    //     url = this.builderUrl(url);
    //     return httpClient.patch(url, params);
    // }

    builderUrl(url) {
        return `${this.endpoint}${url}`;
    }
}