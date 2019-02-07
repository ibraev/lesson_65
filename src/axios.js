import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-project-js4.firebaseio.com/'
});

export default instance