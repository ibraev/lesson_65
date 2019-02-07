import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ibraev-base.firebaseio.com/'
});

export default instance