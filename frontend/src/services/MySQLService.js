import Api from './Api'

const BASE_URL = 'api';

export default {
    getUsers: function () {
        return Api(BASE_URL).get('/users')
            .then(response => {
                return response.data;
            }).catch(error => console.log(error));
    }
}