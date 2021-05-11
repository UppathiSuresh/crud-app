import React, { Component } from 'react';
import { Panel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import EmpDataService from "../../services/emp.crud.service";

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  marginTop: -100
};

const panelStyle = {
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 0,
  paddingLeft: 20,
  paddingRight: 20,
  width: 300,
};

const buttonStyle = {
  marginBottom: 0
};

class LoginForm extends Component {

  loginUser() {

    var usrName = document.getElementById('userName').value; 
    var usrPassword = document.getElementById('userPswd').value;

    var data = {
        "UserName": usrName,
        "Password": usrPassword
    }
  
    EmpDataService.getToken(data)
        .then(response => {
            console.log(response);
        })
        .catch(e => {
            console.log(e);
        });
}
  render() {
    return (
      <div style={divStyle}>
        <Panel style={panelStyle}>
          <Form horizontal className="LoginForm" id="loginForm">
            <FormGroup >
              <FormControl id="userName" type="text" placeholder="User Name" />
            </FormGroup>
            <FormGroup >
              <FormControl id="userPswd" type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup style={buttonStyle} >
              <Button bsStyle="primary" type="submit" onClick={this.loginUser}>
                Login
              </Button>
            </FormGroup>
          </Form>
        </Panel>
      </div>
    )
  }
}

export default LoginForm;