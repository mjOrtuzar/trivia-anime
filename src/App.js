import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlayButton from './components/mainTrivia';
import Logo from './components/mainTrivia/Logo.png';
import './App.css';

class App extends Component {
  render() {
    return (

      <MuiThemeProvider>
        <Row>
          <Col xs={12} md={12}>
          <h2>Prueba tus conocimientos ñoños con...</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <img src={Logo} className="logo" alt="logo"/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <PlayButton/>
          </Col>
        </Row>
      </MuiThemeProvider>
    );
  }
}

export default App;
