import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_DB_URL || 'http://localhost:3033/posts'
});

export default instance;