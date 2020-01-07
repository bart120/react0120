import React, { Component } from 'react';
/*import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';*/
import { Toolbar, AppBar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Header extends Component {

    state = {};

    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">
                        MonApp
                    </Typography>

                    <Link to="/" className="lien">Accueil</Link>

                    <Link to="/rooms/list" className="lien">Salles</Link>

                    <Link to="/rooms/add" className="lien">Ajouter</Link>

                    <Link to="/login" className="lien">Se connecter</Link>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
