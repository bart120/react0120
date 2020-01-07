import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

class LoginForm extends Component {


    render() {
        return (
            <form noValidate>
                <div>
                    <TextField label="Email" type="email" />
                </div>
                <div>
                    <TextField label="Mot de passe" type="password" />
                </div>
                <Button variant="contained" color="primary">Se connecter</Button>
            </form>
        );
    }
}

export default LoginForm;