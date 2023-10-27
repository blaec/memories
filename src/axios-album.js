import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://10.100.102.4:3033/posts'
});

export default instance;