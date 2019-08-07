import API from '../services/Api'
// import MySQLService from '../services/MySQLService'
// import store from './store'
// import router from '../routers/router'

import axios from 'axios'
const AXIOS = axios.create({
    baseURL: `/api`,
    timeout: 1000
});

export default {
    getAllUsers: function () {
        console.log("main에 왓다");
        return AXIOS.get('/users');
    }
}

