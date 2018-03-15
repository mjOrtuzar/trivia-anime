import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import PlayButton from './components/mainTrivia';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;
