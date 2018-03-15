import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class App extends Component {
  render() {
    return (
      <div>
      <MuiThemeProvider>
        <AppBar title={'esto funciono :D'}/>
      </MuiThemeProvider>

      <h2>Prueba tus conocimientos ñoños con...</h2>
      <h1>Trivia(pp!)</h1>
      </div>
    );
  }
}

export default App;
