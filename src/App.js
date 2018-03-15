import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import PlayButton from './components/mainTrivia';

class App extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider>
        <Row>
          <Col xs={12} md={6} >
          <AppBar title={'esto funciono :D'}/>
          </Col>
        </Row>
        <Row>
          <Col>
            
          </Col>
        </Row>
        <Row>
          <Col xs ={12}>
            <PlayButton/>
          </Col>
        </Row>
      </MuiThemeProvider>

      <h2>Prueba tus conocimientos ñoños con...</h2>
      <h1>Trivia(pp!)</h1>
      </div>
    );
  }
}

export default App;
