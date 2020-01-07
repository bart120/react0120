import React, { Component } from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Routes from './conf/Routes';

import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header></Header>
          <Container fixed className="layout-fix">
            <Routes></Routes>

            <Footer></Footer>
          </Container>
        </Router>
      </>
    );
  }
}

export default App;
