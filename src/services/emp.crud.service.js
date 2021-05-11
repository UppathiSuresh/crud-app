import axios from 'axios';

class EmpDataService {

    constracotr() {var  accessToken = '';}
    tokenHeader = {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }

    getToken(userData) {
       return axios.post('http://localhost:62943/api/token', userData)
    }

    getAll() {
        axios.get('http://localhost:62943/api/Employe', {
            headers: this.tokenHeader
        }).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })
    }
}

export default new EmpDataService();