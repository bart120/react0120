import React, { Component } from 'react';
/*import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';*/
import { Toolbar, AppBar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

    state = {
        //user: null
    };

    componentDidMount() {
        //this.setState({ user: JSON.parse(sessionStorage.getItem('USER')) });
    }

    render() {
        //console.log('props', this.props);
        return (
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">
                        MonApp
                    </Typography>

                    <Link to="/" className="lien">Accueil</Link>

                    <Link to="/rooms/list" className="lien">Salles</Link>

                    <Link to="/rooms/add" className="lien">Ajouter</Link>

                    {this.props.user ?
                        (<>Bonjour {this.props.user.name} <Button>Se déconnecter</Button></>) :
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

export default connect(mapStateReduxToProps)(Header);
