import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';

class LoginPage extends Component {


    render() {
        return (
            <>
                <h3>Connexion</h3>
                <LoginForm></LoginForm>
            </>
        );
    }
}

export default LoginPage;