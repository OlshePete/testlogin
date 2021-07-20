import axios from "axios";

export const baseURL = 'http://emphasoft-test-assignment.herokuapp.com/';

export const apiClient = axios.create({
    baseURL,
});

apiClient.interceptors.request.use(
    config => {
        console.log('config', config);
        const token = localStorage.getItem('token')
        console.log(token);
        if (token) {
            config.headers['Authorization'] = `Token ${token}`
        }
        console.log('config 2', config);
        return config
    },
    error => Promise.reject(error)
)