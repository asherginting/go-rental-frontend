import axios from 'axios';
const {REACT_APP_API} = process.env;

const http = (token) => {
    const headers = {};
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return axios.create({
        baseURL: REACT_APP_API,
        headers
    });
};

export default http;