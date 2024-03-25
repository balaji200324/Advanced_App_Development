import axios from 'axios';
const API_URL = 'http://localhost:8080/api';

const apiservice =axios.create({
    baseURL:API_URL,
    timeout:5000,
})

export default apiservice