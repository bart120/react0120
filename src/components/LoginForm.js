import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import InputEmail from './InputEmail';

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    };

    onChangeInput = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value });
        console.log(this.state);
    }

    render() {
        return (
            <form noValidate>
                <div>
                    <InputEmail textLabel="Login" valid />
                </div>
                <div>
                    <TextField label="Mot de passe" type="password" name="password" onChange={this.onChangeInput} />
                </div>
                <Button variant="contained" color="primary">Se connecter</Button>
            </form>
        );
    }
}

export default LoginForm;