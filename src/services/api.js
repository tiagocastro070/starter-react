import env from './env.js';
import axios from 'axios';

const instance = axios.create({
    baseURL: env.baseURL,
    headers: {'Content-Type': 'application/json'}
});


export default instance;
