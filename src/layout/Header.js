import React, { Component } from 'react';
/*import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';*/
import { Toolbar, AppBar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../redux/actions/AuthenticationActions';
import { withTranslation } from 'react-i18next';

class Header extends Component {

    state = {
        //user: null
    };

    componentDidMount() {
        //this.setState({ user: JSON.parse(sessionStorage.getItem('USER')) });
    }

    onLogout = () => {
        this.props.actionLogout();
    }

    render() {
        //console.log('props', this.props);
        const { t } = this.props;
        return (
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">
                        MonApp
                    </Typography>

                    <Link to="/" className="lien">{t('header.home')}</Link>

                    <Link to="/rooms/list" className="lien">{this.props.t('header.rooms')}</Link>

                    <Link to="/rooms/add" className="lien">{this.props.t('header.add')}</Link>

                    {this.props.user ?
                        (<>Bonjour {this.props.user.name} <Button onClick={this.onLogout}>Se déconnecter</Button></>) :
                        (<Link to="/login" className="lien">Se connecter</Link>)
                    }
                </Toolbar>
            </AppBar >
        );
    }
}

const mapStateReduxToProps = (stateStore) => {
    return { isConnected: stateStore.isConnected, user: stateStore.user };
}

const mapActionsToProps = (payload) => {
    return { actionLogout: bindActionCreators(logout, payload) }
}

const head = withTranslation()(Header);
export default connect(mapStateReduxToProps, mapActionsToProps)(head);
