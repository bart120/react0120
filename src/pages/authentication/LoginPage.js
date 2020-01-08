import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logon } from '../../redux/actions/AuthenticationActions';

class LoginPage extends Component {

    onLogin = (user) => {
        //sessionStorage.setItem('USER', JSON.stringify({ name: user.email, token: 'DFSQDGFDFSGD' }));
        this.props.actionLogon(user);
    }

    render() {
        console.log('props', this.props);
        return (
            <>
                <h3>Connexion</h3>
                <LoginForm onLoginProps={this.onLogin}></LoginForm>
            </>
        );
    }
}

const mapActionsToProps = (payload) => {
    return { actionLogon: bindActionCreators(logon, payload) }
}

export default connect(null, mapActionsToProps)(LoginPage);