import React, { Component } from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Routes from './conf/Routes';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header></Header>
          <Container fixed className="layout-fix">
            <Routes></Routes>

            <Footer></Footer>
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
