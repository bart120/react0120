import React, { Component } from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import Header from './layout/Header';
import Footer from './layout/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Container fixed className="layout-fix">
          <Footer></Footer>
        </Container>
      </>
    );
  }
}

export default App;
