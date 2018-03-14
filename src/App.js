import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar title={'esto funciono :D'}/>
      </MuiThemeProvider>
    );
  }
}

export default App;
