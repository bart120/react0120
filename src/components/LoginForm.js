import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import InputEmail from './InputEmail';
import { PropTypes } from 'prop-types';

class LoginForm extends Component {

    static propTypes = {
        onLoginProps: PropTypes.func
    }
    state = {
        email: '',
        password: ''
    };

    onChangeFormField = (ev) => {
        this.setState({ [ev.target.name]: ev.target.value });

    }

    onChangeInput = (obj) => {
        this.setState(obj);

    }

    onLogin = (ev) => {
        ev.preventDefault();
        console.log(this.state);
        this.props.onLoginProps(this.state);
    }


    render() {
        return (
            <form noValidate onSubmit={this.onLogin}>
                <div>
                    <InputEmail textLabel="Login" valid onChangeProps={this.onChangeInput} name="email" />
                </div>
                <div>
                    <TextField label="Mot de passe" type="password" name="password" onChange={this.onChangeFormField} />
                </div>
                <Button type="submit" variant="contained" color="primary" >Se connecter</Button>

            </form>
        );
    }
}

export default LoginForm;