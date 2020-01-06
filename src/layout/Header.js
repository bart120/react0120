import React, { Component } from 'react';
/*import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';*/
import { Toolbar, AppBar, Typography } from '@material-ui/core';

class Header extends Component {

    state = {};

    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">
                        MonApp
                    </Typography>
                    <a href="">Salles</a>
                    <a href="">Ajouter</a>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
