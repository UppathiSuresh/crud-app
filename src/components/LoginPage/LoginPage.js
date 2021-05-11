import React, { Component } from 'react';
import EmpDataService from "../../services/emp.crud.service";
import {Link} from 'react-router-dom';

const welcomeuser = () => (
    <welcome />
);
class LoginPage extends Component {
    loginUser() {
        var usrName = document.getElementById('userName').value;
        var usrPassword = document.getElementById('userPswd').value;
        var data = {
            "UserName": usrName,
            "Password": usrPassword
        }
        EmpDataService.getToken(data)
            .then(response => {
                localStorage.setItem("token", response.data.Token);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div className="LoginPage">
                <h2>Please provide login details </h2>
                <input type='text' id="userName" placeholder="User Name" />
                <input type='password' id="userPswd" placeholder="User Password" />
                <Link to="/Welcome">
                    <button type="button">
                        Login
                    </button>
                </Link>                
            </div>
        );
    }
}
export default LoginPage;