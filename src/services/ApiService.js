import axios, { AxiosHeaders } from "axios";

const API_BASE_HOST = 'desuni-back-production.up.railway.app';

export const httpClient = axios.create ({
    // baseURL:'http://localhost:8080/api',
    baseURL:`http://${API_BASE_HOST}/api`,
    withCredentials: true,
});

export default class ApiService {
    
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    get(url) {
        url = this.builderUrl(url);
        return httpClient.get(url);
    }

    postWithBody(url, params) {
        url = this.builderUrl(url);
        return httpClient.post(url, params);
    }

    delete(url) {
        url = this.builderUrl(url);
        return httpClient.delete(url);
    }

    post(url, params) {
        url = this.builderUrl(url);
        return httpClient.post(url, params);
    }

    put(url, params) {
        url = this.builderUrl(url);
        return httpClient.put(url, params);
    }

    // get(url) {
    //     url = this.builderUrl(url);
    //     return httpClient.get(url);
    // }
    

    // postWithHeaders(params) {
    //     return httpClient.post(this.endpoint, params, {
    //         headers:{
    //             'Content-type': 'multipart/form-data'
    //         },
    //     })
    // }
    
    
    
    

    // getAllById(url, id) {
    //     return httpClient.get(this.builderUrl(`${url}/${id}`));
    // }

    // getWithFilter(url) {
    //    url = this.builderUrl(url);
    //    return httpClient.get(url);
    // }
    
    

    // patch(url, params) {
    //     url = this.builderUrl(url);
    //     return httpClient.patch(url, params);
    // }

    builderUrl(url) {
        return `${this.endpoint}${url}`;
    }
}